const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arrN = n.toString().split('');
  let res = [];
  arrN.forEach((x, ind) => {
    let arrCopy = arrN.slice();
    arrCopy.splice(ind, 1);
    let t = +arrCopy.join('')
    res.push(t)
  })
  let result = Math.max(...res);
  return result
}

module.exports = {
  deleteDigit
};
