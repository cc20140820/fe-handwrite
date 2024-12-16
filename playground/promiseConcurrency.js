/** 实现异步执行队列，保证返回结果的有序性 */
async function work(tasks, limit) {
    // TODO
}

// 测试代码
const tasks = Array.from({ length: 100 }, (_, index) => {
    return () => {
        return new Promise((resolve, reject) => {
            const shouldResolve = Math.random() > 0.3
            setTimeout(() => {
                if (shouldResolve) {
                    resolve(`Result ${index + 1}`)
                } else {
                    reject(`Reason ${index + 1}`)
                }
            }, Math.random() * 1000)
        })
    }
})


work(tasks, 10).then(results => {
    console.log(results); // 输出按顺序返回的结果
});
