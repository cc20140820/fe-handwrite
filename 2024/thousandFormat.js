/** 数值千分位展示 */

/** 浏览器内置的国际化方法 toLocaleString */
function thousandFormat(num) {
    return num.toLocaleString('en-US')
}

/** 正则表达式 */
function thousandFormat2(num) {
    const [integer, decimal] = num.toString().split('.');
    const formattedInteger = integer.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return decimal ? `${formattedInteger}.${decimal}` : formattedInteger;
}

/** 更精细的国际化支持 Intl.NumberFormat */
function thousandFormat3(num) {
    const formatter = new Intl.NumberFormat('en-US'); // 你可以选择不同的地区
    return formatter.format(num);
}


let num = 1234567;
let formattedNum = thousandFormat2(num);
console.log(formattedNum);  // 输出 "1,234,567.89"