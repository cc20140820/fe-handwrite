function quickSort(arr) {
    // 基本条件：数组长度小于或等于 1 时，已经是有序的，直接返回
    if (arr.length <= 1) {
        return arr;
    }

    // 选择基准元素，通常选择第一个元素或者最后一个元素，这里选择第一个元素作为基准
    const pivot = arr[0];

    // 分割成小于基准元素和大于基准元素的两个子数组
    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)]

}

// 测试
const arr = [38, 27, 43, 3, 9, 82, 10];
console.log(quickSort(arr)); // 输出：[3, 9, 10, 27, 38, 43, 82]
