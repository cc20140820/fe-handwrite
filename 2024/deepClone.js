// 1. 浅拷贝只会复制顶层属性和值，如果属性值是对象或者数组，它只会复制引用。
// 2. 深拷贝会递归地复制所有对象层级，确保所有对象和数组都会真正复制，而不只是引用。

function shallowCopy(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return obj
    }
    return Object.assign({}, obj)
}

function deepCopy(obj, hash = new WeakMap()) {

    if (typeof obj !== 'object' || obj === null) {
        return obj
    }
    if (obj instanceof Date) {
        return new Date(obj)
    }
    if (obj instanceof RegExp) {
        return new RegExp(obj)
    }

    if (hash.has(obj)) {
        return hash.get(obj)
    }

    const newObj = Array.isArray(obj) ? [] : {}
    hash.set(obj, newObj)

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = deepCopy(obj[key], hash)
        }
    }
    return newObj
}

const original = { a: 1, b: { c: 2 } };
const copied = shallowCopy(original);
console.log(copied); // { a: 1, b: { c: 2 } }
