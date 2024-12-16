/** 函数柯里化
 * 1. 实现函数的分步调⽤
 * 2. 参数数量满足 就执行函数，否则就返回新函数
 */

function curry() {

}

function sum(a, b, c) {
    return a + b + c;
}

const curriedSum = curry(sum);

console.log(curriedSum(1, 2, 3)); // 输出 6  
console.log(curriedSum(1)(2)(3)); // 输出 6  
console.log(curriedSum(1, 2)(3)); // 输出 6