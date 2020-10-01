import loader from './Loader.js'
let scale = 8
let getRoom = (scene) =>{
    loader.load('CLONE.glb', function (gltf) {
        scene.add(gltf.scene);
        gltf.scene.children.forEach(element => {
            // if(element.name == 'ROOM') return
            if(element.name == 'PROTECCIONES') return
            // if(element.name == 'PISO') return
            element.castShadow = true
            element.receiveShadow = true
            
            
        });
        console.log(gltf.scene.children);
        gltf.scene.castShadow = true;
        gltf.scene.receiveShadow = false; 
        gltf.scene.position.set(0,0,0)
        gltf.scene.scale.set(scale, scale, scale)
    })
}
export default getRoom
