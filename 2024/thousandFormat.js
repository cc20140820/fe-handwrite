/** 数值千分位展示 */

function thousandFormat(num) {
    return num.toLocaleString('en-US')
}

let num = 1234567.89;
let formattedNum = thousandFormat(num);
console.log(formattedNum);  // 输出 "1,234,567.89"