import machine from "./Machine.js";

const camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, .1, 350);
camera.position.set(1, 20, 1)
// camera.lookAt(mesh)

export default camera