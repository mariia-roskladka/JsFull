import { reverseArray, withdraw, getAdults } from './index';

// 1.========TESTS=======ReverseArray==============
it('Shude return null because not array', () => {
    const result = reverseArray(6);
    expect(result).toEqual(null);
});

it('Shude return null because not array', () => {
    const result = reverseArray('6');
    expect(result).toEqual(null);
});

it('Shude return null because not array', () => {
    const result = reverseArray({});
    expect(result).toEqual(null);
});

it('Shude return reverse array', () => {
    const result = reverseArray([4, 5, 7, 1, 105]);
    expect(result).toEqual([105, 1, 7, 5, 4]);
});

it('Shude return reverse array', () => {
    const result = reverseArray(['1', 2, '3', 4]);
    expect(result).toEqual([4, '3', 2, '1']);
});

it('Shude return reverse array', () => {
    const result = reverseArray(['1', '2', '3', '4', '5']);
    expect(result).toEqual(['5', '4', '3', '2', '1']);
});

// 2.========TESTS=======Withdraw==================

it('should get residue after withdraw', () => {
    const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 50);

    expect(result).toEqual(-1);
});

it('should get residue after withdraw, when withdraw biger balance', () => {
    const result = withdraw(
        ['Den', 'John', 'Mike', 'Nikita', 'Julia'], [970, 840, 2047, 1030, 230],
        'John',
        1500,
    );
    expect(result).toEqual(-1);
});

it('should get residue after withdraw nothing', () => {
    const result = withdraw(
        ['Den', 'John', 'Mike', 'Nikita', 'Julia'], [700, 840, 204, 1300, 23],
        'Den',
        0,
    );
    expect(result).toEqual(700);
});

// 3.========TESTS=======GetAdults=================

it('get oll people why age 18 and over ', () => {
    const result = getAdults({ 'John Doe': 19, Tom: 100, Bob: 18 });
    expect(result).toEqual({ 'John Doe': 19, Tom: 100, Bob: 18 });
});

it('get oll people why age 18 and over, if oll yanger 18 ', () => {
    const result = getAdults({ Tom: 90, Lilit: 18, Den: 4 });
    expect(result).toEqual({ Tom: 90, Lilit: 18 });
});

it('get oll people why age 18 and over, if oll older 18 ', () => {
    const result = getAdults({ Tom: 46, Lilit: 7, Den: 3 });
    expect(result).toEqual({ Tom: 46 });
});