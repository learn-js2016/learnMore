// pick 提取 从对象中取出与给定键对应的键值对。 
// reduce 遍历给定key  in 运算符，判断存在于 obj 的key  
// acc[curr] = obj[curr]对应的键值对 存 {}上， 
// '，'运算符 返回 累算的对象

const pick = (obj, arr) => arr.reduce((acc, curr) => (curr in obj && (acc[curr] = obj[curr]), acc), {});

const objTest = {a: 'test', b: 2, c: 4, d: 9, f: [1, 3, 3, 4], h: {k: 10}};
const newObj = pick(objTest, ['a', 'c', 'h']);

console.log(newObj);
// => {a: 'test', c: 4, h: {k: 10}}