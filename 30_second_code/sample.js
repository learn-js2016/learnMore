//  sample 数组取样，随机获取数组中的一个数组

const sample = arr => arr[Math.floor(Math.random() * arr.length)];

console.log(sample([3, 4, 7, 10, 12]));