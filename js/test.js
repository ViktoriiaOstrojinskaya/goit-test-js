const numbers = [1, 1, 2, 3, 1, 2, 17, 1, 1, 1, 19, 1];

// function getCommonElements(arr) {
//   for (let i = 0; i < arr.length; i += 1) {
//     const idx = arr.indexOf(arr[i], i + 1);
//     if (idx !== -1) {
//       arr.splice(idx, 1);
//       i -= 1;
//     }
//   }
//   return arr;
// }

function getCommonElements(arr) {
  for (let i = arr.length - 1; i >= 0; i -= 1) {
    const idx = arr.indexOf(arr[i], i + 1);
    if (idx !== -1) {
      arr.splice(idx, 1);
      //i -= 1;
    }
  }
  return arr;
}
console.log(getCommonElements(numbers));
