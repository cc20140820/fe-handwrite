// 红灯 3s 亮一次
// 绿灯 1s 亮一次
// 黄灯 2s 亮一次
// 如何让三个灯不断交替重复亮灯？

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function startTrafficLights2() {
    let lights = ['red', 'green', 'yellow']; // 红、绿、黄灯
    let durations = [3000, 1000, 2000]; // 红灯3秒，绿灯1秒，黄灯2秒

    while (true) {
        for (let i = 0; i < lights.length; i++) {
            let currentLight = lights[i];
            console.log(`${currentLight} light is ON`);
            // 等待指定的时间后切换到下一个灯
            await sleep(durations[i]);
        }
    }
}

function startTrafficLights() {
    const lights = ['red', 'green', 'yellow'];
    const durations = [3000, 1000, 2000]

    function lightUp(index) {
        const currentLight = lights[index];
        const nextIndex = (index + 1) % lights.length

        console.log('Now is', currentLight)

        setTimeout(() => {
            lightUp(nextIndex)
        }, durations[index])
    }

    lightUp(0)
}

startTrafficLights2();
