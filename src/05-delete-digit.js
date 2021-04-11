/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = String(n).split('');
  const resArr = [];

  for (let i = 0; i < arr.length + 1; i++) {
    arr = String(n).split('');
    arr.splice(i, 1);
    resArr.push(arr.join(''));
  }

  return +resArr.sort((a, b) => a - b).pop();
}

module.exports = deleteDigit;
