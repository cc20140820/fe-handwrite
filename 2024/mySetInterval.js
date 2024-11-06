function mySetInterval(callback, delay) {
    // 初始调用  
    callback();

    // 递归调用 setTimeout 来模拟 setInterval  
    const intervalId = setTimeout(() => {
        // 清除前一个 setTimeout，防止在回调函数执行时间较长时产生累积的延迟  
        clearTimeout(intervalId);

        // 递归调用 mySetInterval  
        mySetInterval(callback, delay);
    }, delay);
}

// 使用示例  
mySetInterval(() => console.log('Hello, world!'), 1000);
