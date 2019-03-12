let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')

let arr = new Array()
for (let i = 0; i < canvas.width/20; i++) {
  arr.push(Math.random() * 400)
}
//clearing canvas
ctx.fillStyle = 'black'
ctx.fillRect(0, 0, canvas.width, canvas.height)

let x = 2

function draw() {
  let x = 10
  for (let i = 0; i < arr.length; i++) {
    let y = arr[i]
    ctx.beginPath()
    ctx.strokeStyle = "white"
    ctx.lineJoin = 'round'
    ctx.lineCap = 'round'
    ctx.lineWidth = 15
    ctx.moveTo(x, canvas.height)
    ctx.lineTo(x, y)
    ctx.stroke()
    x+=20
  }
}
let i = 0
let j = 0
let interval = setInterval(() => {
  if (i < arr.length + 1) {
    //clearing canvas
    ctx.fillStyle = 'black'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    let a = arr[j]
    let b = arr[j + 1]
    if (a < b) {
      let temp = a
      a = b
      b = temp
      arr[j] = a
      arr[j + 1] = b
    }
    j++
    if (j > arr.length - 1 - i) {
      i++
      j = 0
    }
    draw()
  } else {
    console.log('fnished')
    clearInterval(interval)
  }
}, 21)
