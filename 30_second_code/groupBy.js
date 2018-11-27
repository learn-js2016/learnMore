// 根据指定的函数对数组元素进行分组

const groupBy = (arr, fn) => 
    arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val, i) => {
        acc[val] = (acc[val] || []).concat(arr[i]);
        return acc;
    }, {});

console.log(groupBy([6.1, 4.2, 6.3, 4.5, 2, 2.3], Math.floor));
// => { 2: [2, 2.3],  4: [4.2, 4.5], 6: [6.1, 6.3] }

console.log(groupBy(['one', 'two', 'three', 'four', 'five'], 'length'));
// => {3: ['one', 'two'], 4: ['four', 'five'], 5: ['three']}

