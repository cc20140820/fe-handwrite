// 写⼀个倒计时hook，传⼊参数为秒数，每隔⼀秒返回倒计时秒数
// 业务⽤法：const [currentSecond] = useDjs(seconds);
// function useDjs(seconds) {

//     const [currentSecond, setCurrentSecond] = useState(seconds)

//     useEffect(() => {
//         if (currentSecond <= 0) return

//         const timer = setTimeout(() => {
//             setCurrentSecond(prev => prev - 1)
//         }, 1000)

//         return () => clearTimeout(timer)

//     }, [currentSecond])

//     return [currentSecond]
// }



// 编写curry.js
// 实现函数的分步调⽤
// 参数数量满足 就执行函数，否则就返回新函数
function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args)
        }
        return function (...args2) {
            return curried.apply(this, args.concat(args2))
        }
    }
}