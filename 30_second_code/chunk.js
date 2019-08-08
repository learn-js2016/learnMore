// chunk-数组分块
// 把一个数组分块成指定大小的小数组

const chunk = (arr, size) => (
    Array.from({length: Math.ceil(arr.length / size)}, (v, i) => 
    // Array.from(new Array(arr.length / size), (v, i) => 
        arr.slice(i * size, (i + 1) * size)
    )
)
// 利用 Array.from方法将类数组转换成数组， 第二个参数为 map方法 
// arr.slice 都数组进行分割

let chunkArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(chunk(chunkArr, 3));
// => [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]