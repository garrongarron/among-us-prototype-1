import camera from './Camera.js';
import KeyListener from './KeyListener.js';
import machine from './Machine.js'
import joistick from './Joistick.js'
import { directional } from './Lights.js'
import bola from './Bola.js'
import available from './../map/Map.js'


let key = new KeyListener()
key.start()

let speed = 1.5;
let rotationSpeed = 4
// camera.position.set(0, 20, 0)
// let targetY = null
let rotationFlag = false
// joistick.addEventListener('mousemove', (e)=>{
//     targetY = e.offsetX -window.innerWidth/2
// })
joistick.addEventListener('mouseover', (e) => {
    rotationFlag = true
    directional.visible = false;
})
joistick.addEventListener('mouseout', (e) => {
    rotationFlag = false
    directional.visible = true;
})

let point = document.querySelector('div.point')
var color = document.querySelector('.monitor4');
machine.addCallback(() => {

    if (key.isPressed(65)) {
        bola.rotation.y += rotationSpeed * Math.PI / 180
    }
    if (key.isPressed(68)) {
        bola.rotation.y -= rotationSpeed * Math.PI / 180
    }

    if (key.isPressed(87)) {
        // camera.position.set(0, 10 , cameraX--)
        camera.position.x -= Math.sin(bola.rotation.y) * speed
        camera.position.z -= Math.cos(bola.rotation.y) * speed
        monitor()
        if (!available()) {
            camera.position.x += Math.sin(bola.rotation.y) * speed * 2
            camera.position.z += Math.cos(bola.rotation.y) * speed * 2
            available()
            return
        }
    }
    if (key.isPressed(83)) {
        // camera.position.set(0, 10, cameraX++)
        camera.position.x += Math.sin(bola.rotation.y) * speed
        camera.position.z += Math.cos(bola.rotation.y) * speed
        monitor()
        if (!available()) {
            camera.position.x -= Math.sin(bola.rotation.y) * speed * 2
            camera.position.z -= Math.cos(bola.rotation.y) * speed * 2
            available()
            return
        }
    }
    // camera.rotatiown.x = ((-targetY+145)/180) * Math.PI / 180

    // if(rotationFlag){
    // camera.rotation.y = camera.rotation.y -((targetY/100) * Math.PI / 180)
    // }

    directional.position.x = camera.position.x
    directional.position.y = camera.position.y
    directional.position.z = camera.position.z + 10

    let bolax = camera.position.x - Math.sin(bola.rotation.y) * 30
    let bolaz = camera.position.z - Math.cos(bola.rotation.y) * 30

    bola.position.set(bolax, 20, bolaz)
    camera.lookAt(bolax, (key.isPressed(87)) ? 20 : 20, bolaz)

    // console.log(e.keyCode);  //w-87    a-65    s-83    d-68
    joistick.innerText = `{"x":${Math.round(camera.position.x)},"z":${Math.round(camera.position.z)}}`
    monitor()

})

let monitor = () =>{
    point.style.left = Math.round(Math.round(camera.position.x) / 2 + (1244) / 2) + 9*4 + 'px'
    point.style.top = Math.round(Math.round(camera.position.z) / 2 - 34*4 + (652) / 2) + 'px'
}