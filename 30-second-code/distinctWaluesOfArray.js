// distinctValuesOfArray 数组去重

const distinctValuesOfArray = arr => [...new Set(arr)];


const arr = [1, 2, 3, 4, 3, 2, 4, 1, 5, 6, 7, 2];
console.log(distinctValuesOfArray(arr));