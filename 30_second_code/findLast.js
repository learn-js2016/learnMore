// 返回 提供的函数返回真值得最后一个元素
// slice(-1) 去除数组最后一位

const findLast = (arr, fn) => arr.filter(fn).slice(-1);

console.log(findLast([1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 15, 18], n => n % 3 === 0));
// => [18];