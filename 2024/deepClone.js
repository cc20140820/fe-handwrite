function shallowCopy(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return obj
    }
    return Object.assign({}, obj)
}
function deepClone(obj, map = new WeakMap()) {
    if (typeof obj !== 'object' || obj === null) return obj
    if (map.has(obj)) return map.get(obj)
    const clone = Array.isArray(obj) ? [] : {}
    map.set(obj, clone)
    Reflect.ownKeys(obj).forEach((prop) => {
        clone[prop] = deepClone(obj[prop], map)
    })
    return clone
}




function testDeepCopy() {
    // 测试对象拷贝
    const obj = {
        name: "John",
        age: 30,
        address: {
            city: "New York",
            zip: "10001"
        }
    };

    const copiedObj = deepCopy(obj);
    console.log("Original obj:", obj);
    console.log("Copied obj:", copiedObj);
    console.log("Is deep copy? ", obj !== copiedObj); // Should be true (they are not the same object)
    console.log("Is deep nested copy? ", obj.address !== copiedObj.address); // Should be true (nested objects should be deep copied)

    // 测试数组拷贝
    const arr = [1, 2, 3, { a: 1, b: 2 }];
    const copiedArr = deepCopy(arr);
    console.log("Original arr:", arr);
    console.log("Copied arr:", copiedArr);
    console.log("Is deep copy? ", arr !== copiedArr); // Should be true
    console.log("Is deep nested copy? ", arr[3] !== copiedArr[3]); // Should be true

    // 测试 Date 类型
    const date = new Date("2023-01-01");
    const copiedDate = deepCopy(date);
    console.log("Original date:", date);
    console.log("Copied date:", copiedDate);
    console.log("Is deep copy? ", date !== copiedDate); // Should be true
    console.log("Is date correctly copied? ", date.getTime() === copiedDate.getTime()); // Should be true

    // 测试 RegExp 类型
    const regex = /abc/i;
    const copiedRegex = deepCopy(regex);
    console.log("Original regex:", regex);
    console.log("Copied regex:", copiedRegex);
    console.log("Is deep copy? ", regex !== copiedRegex); // Should be true
    console.log("Is regex correctly copied? ", regex.source === copiedRegex.source); // Should be true

    // 测试循环引用
    const circularObj = { name: "Alice" };
    circularObj.self = circularObj; // Creating a circular reference
    const copiedCircularObj = deepCopy(circularObj);
    console.log("Original circularObj:", circularObj);
    console.log("Copied circularObj:", copiedCircularObj);
    console.log("Is circular reference preserved? ", copiedCircularObj.self === copiedCircularObj); // Should be true
}

// 运行测试
testDeepCopy();
