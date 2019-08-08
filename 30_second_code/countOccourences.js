// countOccurrences 计数数组中某个值的出现次数

const countOccurrences = (arr, val) => arr.reduce((acc, v) => v === val ? acc + 1 : acc, 0);
// reduce循环遍历，相等时 加1
const arr = [1, 2, 3, 4, 1, 3, 3, 6, 9, 2, 3, 1, 5];
console.log(countOccurrences(arr, 1));
//  => 3