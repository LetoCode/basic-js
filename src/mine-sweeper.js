const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let coords;

  let resultMatrix = JSON.stringify(matrix);
  resultMatrix = JSON.parse(resultMatrix)

  resultMatrix.forEach(el => {
    el.fill(0)
  })

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      coords = getCoords(i, j, matrix.length, matrix[i].length);
      resultMatrix[i][j] = getResulMatrixEl(coords);
    }
  }

  function getResulMatrixEl(coords) {
    count = 0;
    coords.forEach(el => {
      let i = el[0], j = el[1];

      if (matrix[i][j] === true) { count++; }
    })
    return count;
  }

  function getCoords(i, j, maxI, maxJ) {
    let xy1 = [i, j + 1];
    let xy2 = [i, j - 1];
    let xy3 = [i + 1, j];
    let xy4 = [i - 1, j];
    let xy5 = [i - 1, j - 1];
    let xy6 = [i - 1, j + 1];
    let xy7 = [i + 1, j + 1];
    let xy8 = [i + 1, j - 1];

    let rightCoords = getRightCoords(maxI, maxJ, xy1, xy2, xy3, xy4, xy5, xy6, xy7, xy8);
    return rightCoords;
  }

  function getRightCoords(maxI, maxJ, ...args) {
    let coordsRight = [];
    args.forEach(el => {
      if ((el[0] >= 0 && el[0] < maxI) && (el[1] >= 0 && el[1] < maxJ)) {
        coordsRight.push(el);
      }
    })
    return coordsRight
  }

  return resultMatrix;
}

module.exports = {
  minesweeper
};
