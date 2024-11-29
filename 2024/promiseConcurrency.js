async function work(tasks, limit) {
    const promises = []
    const pool = new Set()

    for (let taskFn of tasks) {
        if (pool.size >= limit) {
            await Promise.race(pool)
        }

        const promise = taskFn()
            .catch(err => err)
            .finally(() => {
                pool.delete(promise);
            });
        promises.push(promise)
        pool.add(promise)
    }
    return Promise.allSettled(promises)
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


work(tasks, 6).then(results => {
    console.log(results); // 输出按顺序返回的结果
});
