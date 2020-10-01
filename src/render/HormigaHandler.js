import KeyListener from './KeyListener.js';
import machine from './Machine.js'
import Animator from './Animator.js';
import { directional2 } from './Lights.js'


let key = new KeyListener()
key.start()

// setTimeout(() => {
//     key.stop()
//     console.log('stop');   
// }, 1000*5);

let speed = 1
let rotationSpeed = 4

let hormigaHandler = (gltf) => {
    let mesh = gltf.scene
    let animatior = new Animator(gltf)

    let last = { '38': false }
    let codes = {}
    for (let index = 0; index < animatior.clips.length; index++) {
        codes[animatior.clips[index]._clip.name] = index
    }



    machine.addCallback(() => {

        if (key.isPressed(38)) {
            mesh.position.x += Math.sin(mesh.rotation.y) * speed
            mesh.position.z += Math.cos(mesh.rotation.y) * speed
        }
        if (last['38'] !== key.isPressed(38)) {
            if (key.isPressed(38)) {
                animatior.action(codes.CAMINATA)
            } else {
                animatior.action(codes.DETENCION)
            }
            last['38'] = key.isPressed(38)
        }

        if (key.isPressed(40)) {
            mesh.position.x -= Math.sin(mesh.rotation.y) * speed
            mesh.position.z -= Math.cos(mesh.rotation.y) * speed
        }

        if (key.isPressed(37)) {
            mesh.rotation.y += rotationSpeed * Math.PI / 180
        }
        if (key.isPressed(39)) {
            mesh.rotation.y -= rotationSpeed * Math.PI / 180
        }

        directional2.position.set(mesh.position.x, 20, mesh.position.z)
        directional2.target.position.set(
            mesh.position.x + Math.sin(mesh.rotation.y) * 200, 
            -50,
            mesh.position.z + Math.cos(mesh.rotation.y) * 200 )
    })
}
export default hormigaHandler