import { getMinAbsoluteNumber } from './getMinSquaredNumber'

it('Shude return null because emply array', () => {
    const result = getMinAbsoluteNumber([]);
    expect(result).toEqual(null);
});

it('Shude return null because not array', () => {
    const result = getMinAbsoluteNumber('6');
    expect(result).toEqual(null);
});

it('Shude get squared min number', () => {
    const result = getMinAbsoluteNumber([-2, 3, -10, -5, 9, 4]);
    expect(result).toEqual(4);
});