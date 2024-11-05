function MyPromise(executor) {
    this.status = 'pending'; // 初始状态为pending  
    this.value = undefined; // 用于保存异步操作的结果  
    this.reason = undefined; // 用于保存异步操作失败的原因  
    this.onFulfilledCallbacks = []; // 成功回调函数队列  
    this.onRejectedCallbacks = []; // 失败回调函数队列 

    // 立即执行executor函数，传入resolve和reject函数  
    const resolve = (value) => {
        if (this.status !== 'pending') return;
        this.status = 'fulfilled';
        this.value = value;
        this.onFulfilledCallbacks.forEach(callback => callback());
    };

    const reject = (reason) => {
        if (this.status !== 'pending') return;
        this.status = 'rejected';
        this.reason = reason;
        this.onRejectedCallbacks.forEach(callback => callback());
    };

    // 捕获executor函数中抛出的异常  
    try {
        executor(resolve, reject);
    } catch (error) {
        reject(error);
    }
}

// then方法，用于指定Promise成功或失败时要执行的回调函数  
MyPromise.prototype.then = function (onFulfilled, onRejected) {
    const promise2 = new MyPromise((resolve, reject) => {
        // 处理Promise状态为fulfilled的情况  
        if (this.status === 'fulfilled') {
            setTimeout(() => {
                try {
                    const result = onFulfilled(this.value);
                    resolve(result);
                } catch (error) {
                    reject(error);
                }
            }, 0);
        }
        // 处理Promise状态为rejected的情况  
        else if (this.status === 'rejected') {
            setTimeout(() => {
                try {
                    const result = onRejected(this.reason);
                    resolve(result);
                } catch (error) {
                    reject(error);
                }
            }, 0);
        }
        // 如果Promise状态还为pending，则将其回调函数加入队列中  
        else {
            this.onFulfilledCallbacks.push(() => {
                setTimeout(() => {
                    try {
                        const result = onFulfilled(this.value);
                        resolve(result);
                    } catch (error) {
                        reject(error);
                    }
                }, 0);
            });
            this.onRejectedCallbacks.push(() => {
                setTimeout(() => {
                    try {
                        const result = onRejected(this.reason);
                        resolve(result);
                    } catch (error) {
                        reject(error);
                    }
                }, 0);
            });
        }
    });
    return promise2;
};

// 静态方法resolve，用于将现有值转换为Promise对象  
MyPromise.resolve = function (value) {
    return new MyPromise(resolve => {
        resolve(value);
    });
};

// 静态方法reject，用于返回一个带有拒绝理由的Promise对象  
MyPromise.reject = function (reason) {
    return new MyPromise((_, reject) => {
        reject(reason);
    });
};

// all方法
// 接收一个 Promise 实例的数组或具有 Iterator 接口的对象作为参数
// 这个方法返回一个新的 promise 对象
// 遍历传入的参数，用Promise.resolve()将参数"包一层"，使其变成一个promise对象
// 参数所有回调成功才是成功，返回值数组与参数顺序一致
// 参数数组其中一个失败，则触发失败状态，第一个触发失败的 Promise 错误信息作为 Promise.all 的错误信息。
Promise.myAll = function (promises) {
    return new Promise((resolve, reject) => {
        if (promises.length === 0) {
            resolve([])
        }
        let counter = 0
        let result = []
        promises.forEach((p, i) => {
            Promise.resolve(p).then(res => {
                result[i] = res
                counter++
                if (counter === promises.length) {
                    resolve(result)
                }
            }).catch(e => reject(e))
        })
    })
}

Promise.myRace = function (promises) {
    if (typeof promises.forEach === 'undefined') {
        return new Error('params is not iterable')
    }
    if (promises.length === 0) return;
    return new Promise((resolve, reject) => {
        for (let i = 0; i < promises.length; i++) {
            Promise.resolve(promises[i]).then(res => {
                resolve(res)
            }).catch(e => reject(e))
        }
    })
}

Promise.myAllSettled = function (promises) {
    if (typeof promises.forEach === 'undefined') {
        return new Error('params is not iterable')
    }
    return new Promise((resolve, reject) => {

        // 如果传入的数组为空，则直接返回空数组
        if (promises.length === 0) {
            return resolve([]);
        }

        const result = []
        let counter = 0

        promises.forEach((p, i) => {
            Promise.resolve(p).then(value => {
                result[i] = { status: "fulfilled", value }
            }).catch(reason => {
                result[i] = { status: "rejected", reason }
            }).finally(() => {
                counter++
                // 当所有 Promise 都完成时，resolve 结果数组
                if (counter === promises.length) {
                    resolve(result)
                }
            })
        })
    })
}

// 使用示例  
const promise = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve('成功!');
    }, 1000);
});

promise.then(
    value => console.log(value), // 输出 '成功!'  
    reason => console.log(reason) // 不会执行  
);
