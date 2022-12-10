/*
 * Complete the 'queensAttack' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER k
 *  3. INTEGER r_q
 *  4. INTEGER c_q
 *  5. 2D_INTEGER_ARRAY obstacles
 */

function queensAttack(n, k, r_q, c_q, obstacles) {
  // Write your code here
  let totalCount = 0;

  let top = r_q - 1;
  let bottom = n - r_q;
  let left = c_q - 1;
  let right = n - c_q;
  let topLeft = Math.min(r_q - 1, c_q - 1);
  let topRight = Math.min(r_q - 1, n - c_q);
  let bottomLeft = Math.min(n - r_q, c_q - 1);
  let bottomRight = Math.min(n - r_q, n - c_q);

  // obstacles
  for (let i = 0; i < k; i++) {
    const [r, c] = obstacles[i];
    const r_dist = Math.abs(r - r_q);
    const c_dist = Math.abs(c - c_q);
    if (r === r_q) {
      if (c < c_q && c_dist < left) {
        const c_q_dist = c_q - 1;
        left -= c_q_dist - (c_dist - 1);
      } else if (c > c_q && c_dist < right) {
        const c_q_dist = n - c_q;
        right -= c_q_dist - (c_dist - 1);
      }
    } else if (c === c_q) {
      if (r < r_q && r_dist < top) {
        const r_q_dist = r_q - 1;
        top -= r_q_dist - (r_dist - 1);
      } else if (r > r_q && r_dist < bottom) {
        const r_q_dist = n - r_q;
        bottom -= r_q_dist - (r_dist - 1);
      }
    } else if (r_dist === c_dist) {
      if (r < r_q && c < c_q && r_dist < topLeft) {
        topLeft -= topLeft - r_dist + 1;
      } else if (r < r_q && c > c_q && r_dist < topRight) {
        topRight -= topRight - r_dist + 1;
      } else if (r > r_q && c < c_q && r_dist < bottomLeft) {
        bottomLeft -= bottomLeft - r_dist + 1;
      } else if (r > r_q && c > c_q && r_dist < bottomRight) {
        bottomRight -= bottomRight - r_dist + 1;
      }
    }
  }

  totalCount =
    top + bottom + left + right + topLeft + topRight + bottomLeft + bottomRight;

  return totalCount;
}

// 100 100
// 48 81
// 54 87
// 64 97
// 42 75
// 32 65
// 42 87
// 32 97
// 54 75
// 64 65
// 48 87
// 48 75
// 54 81
// 42 81
// 45 17
// 14 24
// 35 15
// 95 64
// 63 87
// 25 72
// 71 38
// 96 97
// 16 30
// 60 34
// 31 67
// 26 82
// 20 93
// 81 38
// 51 94
// 75 41
// 79 84
// 79 65
// 76 80
// 52 87
// 81 54
// 89 52
// 20 31
// 10 41
// 32 73
// 83 98
// 87 61
// 82 52
// 80 64
// 82 46
// 49 21
// 73 86
// 37 70
// 43 12
// 94 28
// 10 93
// 52 25
// 50 61
// 52 68
// 52 23
// 60 91
// 79 17
// 93 82
// 12 18
// 75 64
// 69 69
// 94 74
// 61 61
// 46 57
// 67 45
// 96 64
// 83 89
// 58 87
// 76 53
// 79 21
// 94 70
// 16 10
// 50 82
// 92 20
// 40 51
// 49 28
// 51 82
// 35 16
// 15 86
// 78 89
// 41 98
// 70 46
// 79 79
// 24 40
// 91 13
// 59 73
// 35 32
// 40 31
// 14 31
// 71 35
// 96 18
// 27 39
// 28 38
// 41 36
// 31 63
// 52 48
// 81 25
// 49 90
// 32 65
// 25 45
// 63 94
// 89 50
// 43 41

queensAttack(100, 100, 48, 81, [
  [54, 87],
  [64, 97],
  [42, 75],
  [32, 65],
  [42, 87],
  [32, 97],
  [54, 75],
  [64, 65],
  [48, 87],
  [48, 75],
  [54, 81],
  [42, 81],
  [45, 17],
  [14, 24],
  [35, 15],
  [95, 64],
  [63, 87],
  [25, 72],
  [71, 38],
  [96, 97],
  [16, 30],
  [60, 34],
  [31, 67],
  [26, 82],
  [20, 93],
  [81, 38],
  [51, 94],
  [75, 41],
  [79, 84],
  [79, 65],
  [76, 80],
  [52, 87],
  [81, 54],
  [89, 52],
  [20, 31],
  [10, 41],
  [32, 73],
  [83, 98],
  [87, 61],
  [82, 52],
  [80, 64],
  [82, 46],
  [49, 21],
  [73, 86],
  [37, 70],
  [43, 12],
  [94, 28],
  [10, 93],
  [52, 25],
  [50, 61],
  [52, 68],
  [52, 23],
  [60, 91],
  [79, 17],
  [93, 82],
  [12, 18],
  [75, 64],
  [69, 69],
  [94, 74],
  [61, 61],
  [46, 57],
  [67, 45],
  [96, 64],
  [83, 89],
  [58, 87],
  [76, 53],
  [79, 21],
  [94, 70],
  [16, 10],
  [50, 82],
  [92, 20],
  [40, 51],
  [49, 28],
  [51, 82],
  [35, 16],
  [15, 86],
  [78, 89],
  [41, 98],
  [70, 46],
  [79, 79],
  [24, 40],
  [91, 13],
  [59, 73],
  [35, 32],
  [40, 31],
  [14, 31],
  [71, 35],
  [96, 18],
  [27, 39],
  [28, 38],
  [41, 36],
  [31, 63],
  [52, 48],
  [81, 25],
  [49, 90],
  [32, 65],
  [25, 45],
  [63, 94],
  [89, 50],
  [43, 41],
]);

queensAttack(5, 3, 4, 3, [
  [5, 5],
  [4, 2],
  [2, 3],
]);
