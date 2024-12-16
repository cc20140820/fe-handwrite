function add(x) {
    const sum = (y) => add(x + y)
    add.toString = () => x
    return sum
}
const res = add(1)(2)(3)
console.log(res.getResult()); // 输出 6