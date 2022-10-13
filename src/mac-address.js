const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let res = true;
  let arr = n.split('-')
  arr.forEach(el => {
    dec = parseInt(el, 16);
    hex = dec.toString(16).toUpperCase();
    if (hex.length === 1) { hex = hex + hex; }
    if (hex !== el) { res = false }
  })
  return res
}
module.exports = {
  isMAC48Address
};
