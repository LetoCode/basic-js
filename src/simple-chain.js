const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: '',
  chainFinished: false,

  getLength() {
    return this.chain.split('~~').length;
  },

  addLink(value) {

    if (this.chainFinished) {
      this.chain = '';
      this.chainFinished = false;
    }

    if (value == 'undefined') {
      value = ' ';
    } else {
      value = String(value)
    }
    if (this.chain === '') {
      this.chain += `( ${value} )`;
    } else {
      this.chain += `~~( ${value} )`;
    }
    return this;
  },

  removeLink(position) {
    if (position > 0 && position <= this.getLength() && !isNaN(Number(position))) {
      this.chain = this.chain.split('~~');
      let arr = this.chain.splice(position - 1, 1);
      this.chain = this.chain.join('~~');
    } else {
      this.chainFinished = true;
      throw new Error("You can't remove incorrect link!");
    }
    return this;
  },

  reverseChain() {
    this.chain = this.chain.split('~~').reverse().join('~~');
    return this;
  },

  finishChain() {
    this.chainFinished = true;
    return this.chain;
  }

};

module.exports = {
  chainMaker
};
