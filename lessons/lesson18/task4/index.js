export function saveCalls(func) {
    const calls = [];

    return function withMemory(...items) {
        calls.push(items);
        withMemory.calls = calls;
        return func.apply(this, items);
    };
}

function test(a, b) {
    return Math.sqrt(a * a + b * b);
}

const testWithMemory = saveCalls(test);
testWithMemory(4, 2);
testWithMemory(9, 1);

console.log(testWithMemory.calls);