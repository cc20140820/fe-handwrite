// 方法一：使用递归
function flattenArray(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result = result.concat(flattenArray(arr[i]))
        } else {
            result.push(arr[i])
        }
    }
    return result;
}

// 方法二：使用reduce方法
function flattenArray2(arr) {
    return arr.reduce((acc, cur) => {
        if (Array.isArray(cur)) {
            acc = acc.concat(flattenArray2(cur))
        } else {
            acc.push(cur)
        }
        return acc
    }, [])
}

// 方法三：使用扩展运算符（ES6）
function flattenArray3(arr) {
    while (arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr);
    }
    return arr;
}

// 方法四：使用flat方法（ES10）
function flattenArray4(arr) {
    const depth = getArrayDepth(arr)
    return arr.flat(depth)
}

function getArrayDepth(arr) {
    let depth = 1
    for (let item of arr) {
        if (Array.isArray(item)) {
            depth = Math.max(depth, 1 + getArrayDepth(item))
        }
    }
    return depth
}

let nestedArray = [1, [2, [3, [4]], 5]];
console.log(flattenArray4(nestedArray)); // 输出 [1, 2, 3, 4, 5]
