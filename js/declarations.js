
let parseFunction = (string, x) => {
    let str = string.replace('y', 'ooo')
    str = str.replace('x', 'y')
    str = str.replace('ooo', 'y')
    console.log('Parsed', string);
    return string
}

let drawFunction = (ctx, viewport, equation) => {
    console.log(equation);
    let factor = 1
    let x = 0
    let interval = setInterval(() => {
        let y = 0
        eval(equation)
        console.info(`X:${x}    Y:${y}`)
        // ctx.beginPath()
        // ctx.lineWidth = '2'
        // ctx.strokeStyle = 'green'
        // ctx.moveTo(x * factor, viewport.height / 2 )
        // ctx.lineTo(x * factor, viewport.height / 2 - y)
        // ctx.stroke()

        ctx.beginPath()
        ctx.fillStyle = '#5ec889'
        ctx.arc(x * factor, viewport.height / 2 - y, 2, 0, 2 * Math.PI)
        ctx.fill()

        if (x > (viewport.width / factor)) return clearInterval(interval)
        x++
    }, 10)
}


//  5x4 - 3x3 + 2x2 - 7x + 3
//  5x3 + 2x2 + 4x - 3
