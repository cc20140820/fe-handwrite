class TaskQueue {
    constructor(maxConcurrent = 10) {
        this.maxConcurrent = maxConcurrent; // 最大并发数
        this.queue = []; // 等待执行的任务队列
        this.activeCount = 0; // 当前活动中的任务数
    }

    // 添加任务到队列并尝试开始执行
    addTask(task) {
        this.queue.push(task)
        this.runNext()
    }

    // 尝试执行下一个任务
    runNext() {
        if (this.queue.length === 0 || this.activeCount >= this.maxConcurrent) return
        const task = this.queue.shift()
        this.activeCount++

        task().then(() => {
            this.activeCount--
            this.runNext()
        })
    }
}

// 示例：使用 TaskQueue 控制并发请求数
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const queue = new TaskQueue(10); // 最多并发10个任务

// 创建20个请求任务并添加到队列
for (let i = 1; i <= 20; i++) {
    const task = () =>
        delay(1000).then(() => console.log(`任务 ${i} 完成`));
    queue.addTask(task);
}
