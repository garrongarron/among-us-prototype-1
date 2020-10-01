class Machine {
    constructor() {
        this.callbacks = []
    }
    addCallback(callback) {
        if (typeof callback === 'function') {
            this.callbacks.push(callback)
        }
    }
    run() {
        machine.callbacks.forEach(func => func())
        requestAnimationFrame(machine.run)
    }
}

const machine = new Machine()
export default machine