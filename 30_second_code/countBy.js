// countBy 返回每个分组数组中元素的数量
// {key: amount...}

const countBy = (arr, fn) => 
    arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val, i) => {
        acc[val] = (acc[val] || 0) + 1;
        return acc;
    }, {});
// reduce(fn, initialValue)
// fn有4个参数accumulator 累加器累加返回值，它是上一次调用时返回的累加值或 initialValue
// 后三个参数 同 map，forEach，filter 即 value正在处理的元素, index索引, arr数组本身

const arr1 = [6.2, 4.3, 2.3, 5.3, 4.2, 6.1, 6,3];
const arr2 = ['one', 'two', 'three', 'four'];

console.log(countBy(arr1, Math.floor));
// => { '2': 1, '3': 1, '4': 2, '5': 1, '6': 3 }
console.log(countBy(arr2, 'length'));
//  => { '3': 2, '4': 1, '5': 1 }