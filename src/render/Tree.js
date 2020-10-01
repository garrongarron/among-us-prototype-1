import machine from './Machine.js'
import SingleAnimator from './SingleAnimator.js';
import loader from './Loader.js'

let getTree = (scene) =>{
    loader.load('arbol-viento.glb', function (gltf) {
        scene.add(gltf.scene);
        gltf.scene.position.set(20, 2, -150)
        gltf.scene.scale.set(2,2,2)
    
        let singleAnimator = new SingleAnimator(gltf)
        singleAnimator.play()
    
        // machine.addCallback(()=>{
        //     gltf.scene.rotation.y -=1 * Math.PI /180 
        // })
    })
}
export default getTree