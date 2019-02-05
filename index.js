let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')

let arr = new Array()
for(let i=0; i<canvas.width; i++){
  arr.push(Math.random()*400)
}
//clearing canvas
ctx.fillStyle = 'black'
ctx.fillRect(0, 0, canvas.width, canvas.height)

let x = 2 

function draw(){
  for(let i=0; i<arr.length; i++){
    let y = arr[i]
    ctx.beginPath()
    ctx.strokeStyle = "white"
    ctx.lineJoin = 'round'
    ctx.lineCap = 'round'
    ctx.moveTo(i, canvas.height)
    ctx.lineTo(i, y)
    ctx.stroke()
  }
}
let i = 0
let j = 0
setInterval(()=>{
  if(i<arr.length+1){
    //clearing canvas
    ctx.fillStyle = 'black'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    
    let a = arr[j]
    let b = arr[j+1]
    if(a<b){
      let temp = a
      a = b 
      b = temp
      arr[j] = a 
      arr[j+1] = b
    }
    j++
    if(j>arr.length-1-i){
      i++
      j = 0
    }
    draw()
  }else{
    console.log('fnished')
  }
}, 1)