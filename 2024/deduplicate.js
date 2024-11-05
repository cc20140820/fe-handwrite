/** 数组去重 */

function deduplicate(arr) {
    return [...new Set(arr)]
}

function deduplicate2(arr) {
    return arr.filter((v, i) => i === arr.indexOf(v))
}

function deduplicate3(arr) {
    return arr.reduce((acc, cur) => {
        if (!acc.includes(cur)) {
            acc.push(cur)
        }
        return acc
    }, [])
}


const array = [1, 2, 3, 4, 4, 3, 2, 1];
const unique = deduplicate(array);
const unique2 = deduplicate2(array);
const unique3 = deduplicate3(array);

console.log(unique); // 输出: [1, 2, 3, 4]
console.log(unique2); // 输出: [1, 2, 3, 4]
console.log(unique3); // 输出: [1, 2, 3, 4]