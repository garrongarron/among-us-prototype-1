import { light1, light2, light3, directional, directional2, pizarron } from './Lights.js'
import floor from './Floor.js'
// import getTree from './Tree.js';
import getImpostor from './Impostor.js';
import getWoman from './Woman.js';
import getRoom from './Room.js';
import './CameraHandler.js'
import camera from './Camera.js';
import bola from './Bola.js'

const scene = new THREE.Scene();


scene.fog = new THREE.FogExp2(0x000000, 0.01);



scene.add(light1);
scene.add(light2);
scene.add(light2.target);
// scene.add(light3);
scene.add(directional);
scene.add(directional2);
scene.add(directional2.target);
scene.add(pizarron);
scene.add(pizarron.target);
scene.add(bola);
// scene.add(floor);



// getTree(scene)
getImpostor(scene)
getRoom(scene)
// getWoman(scene)




export default scene