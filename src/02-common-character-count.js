/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const obj1 = s1.split('').reduce((accum, curr) => ((accum[curr] = ++accum[curr] || 1, accum)), {});
  const obj2 = s2.split('').reduce((accum, curr) => ((accum[curr] = ++accum[curr] || 1, accum)), {});

  let sum = 0;

  for (const key in Object.values(obj1)) {
    for (const key2 in Object.values(obj2)) {
      if (Object.keys(obj1)[key] === Object.keys(obj2)[key2]) {
        // eslint-disable-next-line no-unused-expressions
        Object.values(obj1)[key] > Object.values(obj2)[key2]
          ? sum += Object.values(obj2)[key2] : sum += Object.values(obj1)[key];
      }
    }
  }

  return sum;
}

module.exports = getCommonCharacterCount;
