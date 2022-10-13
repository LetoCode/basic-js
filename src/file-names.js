const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let set = new Set(names);

  let register = {};
  set.forEach(name => {
    register[name] = -1;
  })

  let res = [];
  names.forEach(name => {
    let count = ++register[name];
    let postfix = (count === 0 ? '' : `(${count})`);
    let fullName = name + postfix;
    if (res.indexOf(fullName) > -1) {
      count = ++register[name]
      postfix = `(${count})`;
      fullName = name + postfix;
    }
    res.push(fullName);
  })

  return res
}

module.exports = {
  renameFiles
};
