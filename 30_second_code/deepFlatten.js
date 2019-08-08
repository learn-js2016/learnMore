// deepFlatten 深度平铺数组 多维数组降为一维

const deepFlatten = arr => [].concat(...arr.map(item => Array.isArray(item) ? deepFlatten(item) : item));
// 利用[].concat ...平铺数组，Array.isArray对数组元素判断，进行递归

const arr = [1, 2, [3, [5, 6, [2, 4]], 5], 4, [4, 5], [3], 9];
console.log(deepFlatten(arr));