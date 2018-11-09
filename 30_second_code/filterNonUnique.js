// filterNonUnique 过滤掉数组中的非唯一值
const filterNonUnique = arr => arr.filter(item => arr.indexOf(item) === arr.lastIndexOf(item));


const arr = [1, 2, 3, 3, 4, 2, 4, 7, 5, 6, 7];
console.log(filterNonUnique(arr));
