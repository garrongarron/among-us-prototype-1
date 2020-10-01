var geometry = new THREE.SphereGeometry( .01, 32, 32 );
var material = new THREE.MeshBasicMaterial( {color: 0xffff66} );
const bola = new THREE.Mesh( geometry, material );

export default bola