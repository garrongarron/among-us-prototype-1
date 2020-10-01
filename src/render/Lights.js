//LIGHTS
const light1 = new THREE.AmbientLight(0xffffff, 1);
light1.position.set(20, 25, -150);
// light1.castShadow = true;

const light2 = new THREE.SpotLight(0x0000ff, 10,500, 0.385398, .2);
light2.position.set(205, 100, -330)
light2.shadow.mapSize.width = 1;
light2.shadow.mapSize.height = 1;

const light3 = new THREE.PointLight(0xffffff, .2);
// light3.position.set(0, 100, 30);
light3.position.set(20, 100, -150);



const directional = new THREE.PointLight(0xffffff, 1);//wTHREE.DirectionalLight( 0xffffff, 1 );

const directional2 = new THREE.SpotLight(0xffffff, 10,50, 0.585398, .2);
directional2.position.set(20, 25, -150)
directional2.target.position.set(0, 0, -150)
directional2.shadow.mapSize.width = 1;
directional2.shadow.mapSize.height = 1;
// directional2.castShadow = true;
// directional2.shadow.camera.fov = 30;
// directional2.shadow.camera.near = 30;
// directional2.shadow.camera.far = 40;


const pizarron = new THREE.SpotLight(0xff0000, 10,50, 0.585398, .2);
pizarron.position.set(-280, 35, -390)
pizarron.target.position.set(-300, 20, -390)
pizarron.shadow.mapSize.width = 1;
pizarron.shadow.mapSize.height = 1;



export { light1, light2, light3, directional, directional2, pizarron }