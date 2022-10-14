const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {

  constructor() {
    this.result = 1;
  }

  calculateDepth(arr, depth = 1) {
    let isDeep = this.isArrDeep(arr);
    if (isDeep) {
      depth++
      arr = arr.flat()
      this.calculateDepth(arr, depth);
    } else {
      this.result = depth;
    }
    return this.result;

  }

  isArrDeep(arr) {
    let res = false;
    let length = arr.length;
    for (let i = 0; i < length; i++) {
      if (arr[i] instanceof Array) {
        res = true;
        i = length;
      }
    }
    return res;
  }
}

module.exports = {
  DepthCalculator
};
