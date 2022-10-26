export default class KeyboardHandler {
    constructor() {
        this.keyPressed = {}
    }
    init() {
        window.addEventListener('keydown', (e) => {
            this.keyPressed[e.key] = true;
        })
        window.addEventListener('keyup', (e) => {
            this.keyPressed[e.key] = false;
        })
        
    }
}