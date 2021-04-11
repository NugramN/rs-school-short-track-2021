/* eslint-disable no-unused-expressions */
/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const [row] = matrix;
  const revertedMatrix = row.map((value, column) => matrix.map((row1) => row1[column]));

  let sum = 0;
  revertedMatrix.forEach((elem) => {
    for (let i = 0; i < elem.length; i++) {
      elem[i] === 0 ? i = elem.length : sum += elem[i];
    }
  });

  return sum;
}

module.exports = getMatrixElementsSum;
