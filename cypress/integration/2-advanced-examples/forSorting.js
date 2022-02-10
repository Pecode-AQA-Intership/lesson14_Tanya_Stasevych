export const getInnerText = (cells) => cells.map((cell) => cell.innerText);
export const getNumbers = (numbers) => numbers.map((number) => parseFloat(number));


export const sortNumbersASC = (array) => array.sort((a, b) => a - b);

export const sortStringsASC = (array) =>
  array.sort((currentValue, nextValue) => {
    const currentValueUpper = currentValue.toUpperCase();
    const nextValueUpper = nextValue.toUpperCase();
    if (currentValueUpper > nextValueUpper) {
      return 1;
    }
    if (currentValueUpper < nextValueUpper) {
      return -1;
    }
    return 0;
  });

 export const sortNumbersDESC = (array) => array.sort((a, b) => b - a);

const sortDESC = (array) =>
  array.sort((a, b) => {
    const aUpper = a.toUpperCase();
    const bUpper = b.toUpperCase();
    if (aUpper > bUpper) {
      return -1;
    }
    if (aUpper < bUpper) {
      return 1;
    }
    return 0;
  });

