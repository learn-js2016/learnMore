// compact 过滤数组中所有假值元素
// 假值元素有(false, null, 0, '', undefined, NaN)

const compact = arr => arr.filter(Boolean);

const array = [1, 2, '', 4, 0, false, NaN, undefined, null, 5, 7, 9];
console.log(compact(array));
// => [ 1, 2, 4, 5, 7, 9 ]