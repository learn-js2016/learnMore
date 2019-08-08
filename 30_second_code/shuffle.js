// shuffle 随机排列数组
//  使用 Fisher-Yates 算法  len
const shuffle = ([...arr]) => {
    let m = arr.length;
    while (m) {
        const i = Math.floor(Math.random() * m--);
        [arr[m], arr[i]] = [arr[i], arr[m]];
    }
    return arr;
}

console.log(shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]));