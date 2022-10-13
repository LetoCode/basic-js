const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let j = 0;
  let res = '';
  for (let i = 0; i < str.length; i++) {
    j++
    if (str[i] !== str[i + 1]) {
      res = res + (j === 1 ? '' : j) + str[i];
      j = 0;
    }
  }
  return res;
}

module.exports = {
  encodeLine
};
