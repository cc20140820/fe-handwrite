/** 防抖 */

function debounce(func, wait) {
    let timer;
    return function () {
        const context = this;
        const args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function () {
            func.apply(context, args);
        }, wait)
    }
}

/** 节流 */
function throttle(func, wait) {
    let isThrottling = false
    let lastArgs = null;
    let lastContext = null;

    return function () {
        const context = this;
        const args = arguments;

        if (isThrottling) {
            lastArgs = arguments
            lastContext = this
            return
        }

        isThrottling = !isThrottling
        func.apply(context, args);
        setTimeout(function () {
            isThrottling = !isThrottling
            if (lastArgs) {
                func.apply(lastContext, lastArgs);
                lastArgs = null;
                lastContext = null;
            }
        }, wait)
    }
}


module.exports = { debounce, throttle };