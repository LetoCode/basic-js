const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let minus = []
  arr.forEach((el, ind) => {
    if (el === -1) { minus.push(ind); }
  })

  let plus = arr.filter(el => el !== -1);
  plus.sort((a, b) => a - b);


  for (let i = 0; i < minus.length; i++) {
    console.log(minus[i])
    plus.splice(minus[i], 0, -1)
  }

  return plus
}

module.exports = {
  sortByHeight
};
