import machine from './Machine.js'

class SingleAnimator {
    constructor(gltf) {
        this.mixer = new THREE.AnimationMixer(gltf.scene)
        this.clock = new THREE.Clock()
        this.clip = this.mixer.clipAction(gltf.animations[0])
        machine.addCallback(() => {
            this.mixer.update(this.clock.getDelta());
        })
    }

    play() {
        this.clip.play()
    }

    stop() {
        this.clip.stop()
    }
}

export default SingleAnimator