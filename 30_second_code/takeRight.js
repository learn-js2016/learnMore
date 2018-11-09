//  数组切片， 返回后N个元素的数组

const takeRight = (arr, n = 1) => arr.slice(arr.length - n, arr.length);

const arr = [1, 4, 5, 9, 10, 3, 5, 2];

console.log(takeRight(arr, 4));
// => [10, 3, 5, 2]