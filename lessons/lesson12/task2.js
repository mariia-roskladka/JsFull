function reverseString(string) {
  if (typeof string !== "string") {
    return null;
  }
  let result = "";
  string
    .split("")
    .reverse()
    .forEach((el) => {
      result = result.concat(el);
    });

  return result;
}

console.log(reverseString("abcd"));