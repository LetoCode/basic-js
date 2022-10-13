const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  let res = {};
  let turns = 0;
  let currentTurn = 1;
  for (let i = 1; i <= disksNumber; i++) {
    turns = turns + currentTurn;
    currentTurn = currentTurn * 2;
  }
  let seconds = turns / (turnsSpeed / 3600);
  res.turns = turns;
  res.seconds = Math.floor(seconds);

  return res;
}

module.exports = {
  calculateHanoi
};
