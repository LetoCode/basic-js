const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {

  if (!(arr instanceof Array)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  let result = [];
  let resultNext = [];

  for (let i = 0; i < arr.length; i++) {
    if (isInstructionNext(arr[i])) {
      let sequence = arr[i].split('-');
      let action = sequence.at(-2);

      if (!isInstruction(arr[i + 1]) && (i + 1) < arr.length) {
        if (action === 'double') {
          resultNext.push(arr[i + 1])
        } else if (action === 'discard') {
          i = i + 2;
        }
      }
    } else {
      resultNext.push(arr[i])
    }

  }


  for (let i = resultNext.length - 1; i >= 0; i--) {
    if (isInstructionPrev(arr[i])) {
      let sequence = resultNext[i].split('-');
      let action = sequence.at(-2);

      if (!isInstruction(arr[i - 1]) && (i - 1) >= 0) {
        if (action === 'double') {
          result.push(resultNext[i - 1])
        } else if (action === 'discard') {
          i = i - 1;
        }
      }
    } else {
      result.push(resultNext[i])
    }

  }

  function isInstructionNext(el) {
    if (el === '--discard-next' || el === '--double-next') {
      return true;
    }
    return false;
  }

  function isInstructionPrev(el) {
    if (el === '--discard-prev' || el === '--double-prev') {
      return true;
    }
    return false;
  }


  function isInstruction(el) {
    if (isInstructionNext(el) || isInstructionPrev(el)) {
      return true;
    }
    return false;
  }


  return result.reverse();
}

module.exports = {
  transform
};
