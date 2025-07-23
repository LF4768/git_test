// function fibs(n) {
//     let arr = [];
//     let a = 0;
//     let b = 1;
//     let c = 0;
//     for (let i = 0; i < n; i++) {
//         arr.push(a);
//         c = a + b;
//         a = b;
//         b = c;
//     }
//     return arr;
// }

// console.log(fibs(8));

// function generateFibonacciArray(n, arr = [0, 1]) {
//     if (n <= 0) return [];
//     if (n === 1) return [0];
//     if (arr.length >= n) return arr;

//     arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
//     return generateFibonacciArray(n, arr);
// }

// // Example usage
// let fibArray = generateFibonacciArray(8);
// console.log("Fibonacci Series:", fibArray);

// function mergeSort(arr) {
//     if (arr.length <= 1) {
//         return arr;
//     }
//     let middle = Math.floor(arr.length / 2);
//     let output1 = mergeSort(arr.slice(0, middle));
//     let output2 = mergeSort(arr.slice(middle, arr.length));
//     return merge(output1, output2);
// }

// let arr = [1, 8, 4, 6, 35, 100, 3, 7, 10, 0];

// console.log(mergeSort(arr));

// function merge(arr1, arr2) {
//     let arr3 = [];
//     let i = 0;
//     let j = 0;
//     while (i < arr1.length && j < arr2.length) {
//         if (arr1[i] < arr2[j]) {
//             arr3.push(arr1[i]);
//             i++;
//         } else {
//             arr3.push(arr2[j]);
//             j++;
//         }
//     }
//     for (; i < arr1.length; i++) {
//         arr3.push(arr1[i]);
//     }
//     for (; j < arr2.length; j++) {
//         arr3.push(arr2[j]);
//     }
//     return arr3;
// }
