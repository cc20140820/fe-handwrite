/** 实现Promise以下方法 携程原题 */

Promise.myAll = function () {

}

Promise.myRace = function () {

}

Promise.myAllSettled = function () {

}


// 说出打印的结果 PDD原题
function sayIt() {
    console.log(1)

    setTimeout(() => {
        console.log(2)
    }, 0);

    const p1 = new Promise((resolve, reject) => {
        console.log(3)
        resolve()
        setTimeout(reject, 0)
    }).then(() => console.log(4))
        .then(() => console.log(5))
        .catch(() => console.log(6))
        .finally(() => console.log(7))
        .then(() => {
            console.log(8);
            throw new Error('console error');
        })
        .then(() => console.log(9))
        .catch(() => console.log(10))
    console.log(11);
}
sayIt()

