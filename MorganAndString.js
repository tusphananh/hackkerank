/*
 * Complete the 'morganAndString' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING a
 *  2. STRING b
 */

function morganAndString(a, b) {
  // Write your code here
  let rs = "";
  while (true) {
    if (a.length > 0 && b.length > 0) {
      const first_a = a.charAt(0);
      const first_b = b.charAt(0);

      if (first_a === "Z" && first_b === "Z") {
        rs += b + a;
        break;
      }

      if (first_a == first_b || first_a < first_b) {
        rs += first_a;
        if (a.length > 1) {
          a = a.substring(1, a.length);
        } else {
          a = "";
        }
      } else {
        rs += first_b;
        if (b.length > 1) {
          b = b.substring(1, b.length);
        } else {
          b = "";
        }
      }
    } else {
      if (a.length > 0) {
        rs += a;
      } else {
        rs += b;
      }

      break;
    }
  }

  return rs;
}

// function* morgan(a, b) {
//   a += "z";
//   b += "z";
//   const l = a.length + b.length - 2;
//   for (var i = 0; i < l; i++) {
//     if (a < b) {
//       yield a[0];
//       a = a.slice(1);
//     } else {
//       yield b[0];
//       b = b.slice(1);
//     }
//   }
// }

// function morganAndString(a, b) {
//   // Write your code here
//   return Array.from(morgan(a, b)).join("");
// }

console.log(morganAndString("CABZZZZDADWDA", "ZCFBD"));
