// 红灯 3s 亮一次
// 绿灯 1s 亮一次
// 黄灯 2s 亮一次
// 如何让三个灯不断交替重复亮灯？

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

startTrafficLights();
