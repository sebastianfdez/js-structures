'use strict';

/**
 *
 * Time: O(N)
 * Additional space: O(N)
 *
 *
 * @param  {number[][]} matrix  Matrix to be rotate represented in a 
 * @return {number[][]}         Matrix rotated 90 degreees
 */
export function rotateMatrix(matrix) {
  // Init new matrix
  let matrixRot = [];
  for(let i=0; i < matrix.length; i++) {
    matrixRot[i] = Array(matrix.length).fill(0);
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      matrixRot[j][matrix.length - 1 - i] = matrix[i][j];
    }
  }
  return matrixRot;
}
