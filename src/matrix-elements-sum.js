const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let x = matrix[0].length;
  let y = matrix.length;
  let arr = [];
  for (let j = 0; j < x; j++) {
    let el = '';
    for (let i = 0; i < y; i++) {
      el = el + matrix[i][j];
    }
    arr.push(el)
  }

  let res = 0;
  arr.forEach(el => {
    for (let i = 0; i < el.length; i++) {
      res = res + +el[i];
      if (el[i] == 0) {
        i = el.length;
      }
    }
  })

  return res
}

module.exports = {
  getMatrixElementsSum
};
