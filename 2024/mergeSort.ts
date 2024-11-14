// function mergeSort(arr: number[]): number[] {
//   if (arr.length === 0) return [];
//   const mid = Math.floor(arr.length / 2);
//   const left = arr.slice(0, mid);
//   const right = arr.slice(mid);
//   return merge(mergeSort(left), mergeSort(right));
// }

// function merge(left: number[], right: number[]): number[] {
//   let leftIndex = 0,
//     rightIndex = 0;
//   let result: number[] = [];

//   while (leftIndex < left.length && rightIndex < right.length) {
//     if (left[leftIndex] < right[rightIndex]) {
//       result.push(left[leftIndex]);
//       leftIndex++;
//     } else {
//       result.push(right[rightIndex]);
//       rightIndex++;
//     }
//   }

//   if (leftIndex === left.length - 1) {
//     result = result.concat(right.slice(rightIndex));
//   } else {
//     result = result.concat(left.slice(leftIndex));
//   }

//   return result;
// }

// const arr = [38, 27, 43, 3, 9, 82, 10];
// console.log(mergeSort(arr)); // 输出：[3, 9, 10, 27, 38, 43, 82]
