const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let repeatTimes = options.repeatTimes || 1;
  let separator = options.separator || '+';
  let addition = Object.hasOwn(options, 'addition') ? options.addition : '';
  let additionRepeatTimes = options.additionRepeatTimes || 1;
  let additionSeparator = options.additionSeparator || '|';
  let additionStr = '';
  if (addition !== '') {
    let additionArr = new Array(additionRepeatTimes);
    additionStr = additionArr.fill(String(addition)).join(additionSeparator);
  }
  let fullStr = str + additionStr || '';
  let result = new Array(repeatTimes).fill(fullStr).join(separator);

  return result

}

module.exports = {
  repeater
};
