const str_1 = "ABCD";
const str_2 = "ABDC";

function commonChild(s1, s2) {
  const s1_len = s1.length;
  const s2_len = s2.length;

  const matrix = Array(s1_len + 1);

  for (let i = 0; i <= s1_len; i++) {
    matrix[i] = Array(s2_len + 1).fill(0);
  }

  for (let i = 1; i <= s1_len; i++) {
    for (let j = 1; j <= s2_len; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1] + 1;
      } else {
        matrix[i][j] = Math.max(matrix[i - 1][j], matrix[i][j - 1]);
      }
    }
  }

  return matrix[s1_len][s2_len];
}
