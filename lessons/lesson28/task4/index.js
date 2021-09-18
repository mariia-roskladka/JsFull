  const add2 = (value) => value + 2;
  const square = (value) => value * value;
  const half = (value) => value / 2;

  const compose =
      (...funcs) =>
      (value) =>
      funcs.reduce((acc, func) => func(acc), value);