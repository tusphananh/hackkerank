/*
 * Complete the 'matrixRotation' function below.
 *
 * The function accepts following parameters:
 *  1. 2D_INTEGER_ARRAY matrix
 *  2. INTEGER r
 */

function matrixRotation(matrix, r) {
  // Write your code here
  const row = matrix.length;
  const col = matrix[0].length;
  const layer = Math.min(row, col) / 2;
  const split = [];
  for (let i = 0; i < layer; i++) {
    const temp = [];
    for (let j = i; j < col - i; j++) {
      temp.push(matrix[i][j]);
    }
    for (let j = i + 1; j < row - i; j++) {
      temp.push(matrix[j][col - i - 1]);
    }
    for (let j = col - i - 2; j >= i; j--) {
      temp.push(matrix[row - i - 1][j]);
    }
    for (let j = row - i - 2; j > i; j--) {
      temp.push(matrix[j][i]);
    }
    split.push(temp);
  }

  // rotate
  for (let i = 0; i < layer; i++) {
    const temp = [];
    for (let j = 0; j < split[i].length; j++) {
      temp.push(split[i][(j + r) % split[i].length]);
    }
    split[i] = temp;
  }

  // merge
  for (let i = 0; i < layer; i++) {
    let index = 0;
    for (let j = i; j < col - i; j++) {
      matrix[i][j] = split[i][index++];
    }
    for (let j = i + 1; j < row - i; j++) {
      matrix[j][col - i - 1] = split[i][index++];
    }
    for (let j = col - i - 2; j >= i; j--) {
      matrix[row - i - 1][j] = split[i][index++];
    }
    for (let j = row - i - 2; j > i; j--) {
      matrix[j][i] = split[i][index++];
    }
  }

  for (let i = 0; i < row; i++) {
    let str = "";
    for (let j = 0; j < col; j++) {
      str += matrix[i][j] + " ";
    }
    console.log(str);
  }
}

matrixRotation(
  [
    [1, 2, 3, 4],
    [12, 1, 2, 5],
    [11, 4, 3, 6],
    [10, 9, 8, 7],
  ],
  2
);
