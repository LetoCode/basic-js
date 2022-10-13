const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let domainsArr = [];
  domains.forEach(el => {
    let arr = el.split('.').reverse().map(x => `.${x}`);
    domainsArr.push(arr)
  })

  let dnsArr = [];
  domainsArr.forEach(el => {
    for (let i = 0; i < el.length; i++) {
      let bite = el.slice(0, i + 1);
      dnsArr.push(bite);
    }
  })
  dnsArr = dnsArr.map(x => x.join(''))
  dnsSet = new Set(dnsArr);

  let result = {}
  dnsSet.forEach(value => {
    let length = dnsArr.filter(x => x === value).length;
    result[value] = length;
  })

  return result
}

module.exports = {
  getDNSStats
};
