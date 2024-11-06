// curry函数 首先肯定返回一个function
// 如果参数数量满足 即 args.length>=fn.length,这个function就返回fn正常执行的结果
// 否则就返回一个新的函数，该函数接受剩余的参数，并将它们与已经收集的参数合并，然后递归调用 curried
function curry(fn) {
    if (typeof fn !== 'function') {
        throw new Error('curry() requires a function');
    }
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args)
        } else {
            return function (...args2) {
                return curried.apply(this, args.concat(args2))
            }
        }
    }
}


// 使用示例  
function sum(a, b, c) {
    return a + b + c;
}

const curriedSum = curry(sum);

console.log(curriedSum(1, 2, 3)); // 输出 6  
console.log(curriedSum(1)(2)(3)); // 输出 6  
console.log(curriedSum(1, 2)(3)); // 输出 6
