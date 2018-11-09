// dropRight 从右开始删除元素

const dropRight = (arr, n = 1) => arr.slice(0, -n);


const arr = [1, 2, 3, 4, 5, 6];

console.log(dropRight(arr, 2));
console.log(dropRight(arr, 4));
console.log(dropRight(arr, 1));