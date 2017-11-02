let canvas = document.getElementById('functions')
let ctx    = canvas.getContext('2d')
let viewport = {
    width: window.innerWidth,
    height: window.innerHeight
}
let btn = {
    calculate: document.getElementById('calc')
}

let input = {
    function: document.getElementById('function')
}

canvas.width = viewport.width
canvas.height = 99.5 * viewport.height / 100

btn.calculate.addEventListener('click', e => {
    console.clear()
    console.log('Input',input.function.value)
    let equation = parseFunction(input.function.value, 10)
    drawFunction(ctx, viewport, equation)
})
