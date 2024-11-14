function mergeSort(arr) {
    if (arr.length <= 1) return arr
    var mid = Math.floor(arr.length / 2);
    var left = arr.slice(0, mid);
    var right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right) {
    var leftIndex = 0, rightIndex = 0;
    var result = [];
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        }
        else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}
var arr = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(arr)); // 输出：[3, 9, 10, 27, 38, 43, 82]
