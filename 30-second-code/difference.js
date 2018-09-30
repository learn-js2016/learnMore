// difference 数组比较

const difference = (a, b) => {
    const s = new Set(b);
    return a.filter(v => !s.has(v));
};
// 先将b转换成Set结构 arr.filter过滤 !set.has 的元素

const a = [1, 2, 3, 4, 5];
const b = [2, 4, 6, 8, 10];
console.log(difference(a, b));