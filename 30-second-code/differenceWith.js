// differenceWith 通过比较函数比较两个数组的差异
const differenceWith = (arr, val, comp) => arr.filter(a => val.findIndex(b => comp(a, b)) === -1);

const arrA = [1, 1.2, 1.5, 3, 0, 2.1];
const arrB = [1.6, 2.7, 3.1, 0];

const comp = (a, b) => Math.round(a) === Math.round(b);
const result = differenceWith(arrA, arrB, comp);
console.log(result);