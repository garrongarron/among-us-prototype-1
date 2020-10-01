// import machine from '../render/Machine.js'
var img = new Image();
img.src = 'map2.png';
var canvas = document.createElement('canvas');
canvas.classList.add('canvas')
document.body.appendChild(canvas)
canvas.style.display = 'none'
canvas.setAttribute('width', 1244)//---3113
canvas.setAttribute('height', 652)//255-------1908




var ctx = canvas.getContext('2d');
let loaded = false
img.onload = function () {
    ctx.drawImage(img, 0, 0);
    img.style.display = 'none';
    loaded = true
    console.log('ok');
};
var color = document.querySelector('.monitor4');
let point = document.querySelector('div.point')
function available() {
    // let x = window.scrollX + window.innerWidth / 2
    // let y = window.scrollY + window.innerHeight / 2
    // x = Math.round(x/4)//
    // y = Math.round(y/4)
    let y = point.style.top.replace('px','')
    let x = point.style.left.replace('px','')
    var pixel = ctx.getImageData(x, y, 1, 1);
    var data = pixel.data;
    var rgba = 'rgba(' + data[0] + ', ' + data[1] +
        ', ' + data[2] + ', ' + (data[3] / 255) + ')';
    color.style.background = rgba;
    color.textContent = rgba;
    color.textContent = (data[3] / 255) == 1;
    // return true
    return (data[3] / 255) == 1
}

// machine.addCallback(()=>{
//     if(loaded){
//         available()
//     }
// })

export default available