import machine from './Machine.js'
import SingleAnimator from './SingleAnimator.js';
import hormigaHandler from './HormigaHandler.js'
import Animator from './Animator.js';
import loader from './Loader.js'
let scale = 6
let getImpostor = (scene) =>{
    loader.load('bbb-hand.glb', function (gltf) { 

        
        scene.add(gltf.scene);
        gltf.scene.position.set(20, 0, -150)
        gltf.scene.scale.set(scale, scale, scale)
    
        // let singleAnimator = new SingleAnimator(gltf)
        // console.log(JSON.stringify(gltf));
        // console.log(gltf.scene.children);
        let children = gltf.scene.children
        let meshes = children.filter(element=>element.children.length > 0)[0].children.filter(mesh=>mesh.type == 'SkinnedMesh');
        meshes.forEach(mesh => {
            console.log(mesh.name, mesh.material.color);
            if(mesh.name == 'cuerpo' || mesh.name == 'mochila'){
                mesh.material.color.r = .35
                mesh.material.color.g = 0
                mesh.material.color.b = 0
            };
        });
        

        hormigaHandler(gltf)
    })
}
export default getImpostor