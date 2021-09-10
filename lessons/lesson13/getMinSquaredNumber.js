export const getMinAbsoluteNumber = numberMas =>
    !Array.isArray(numberMas) || numberMas.length === 0 ?
    null :
    Math.min(...numberMas.map(num => Math.abs(num * num)));