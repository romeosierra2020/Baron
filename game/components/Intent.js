export default class Intent{
    constructor() {
        this.current = 'idle'
    }
    update(input) {
        if(input.keyboardHandler.keyPressed.ArrowUp) {
            this.current = 'moveUp'
        } else if(input.keyboardHandler.keyPressed.ArrowLeft) {
            this.current = 'moveLeft'
        } else if(input.keyboardHandler.keyPressed.ArrowDown) {
            this.current = 'moveDown'
        } else if(input.keyboardHandler.keyPressed.ArrowRight) {
            this.current = 'moveRight'
        } else if(input.keyboardHandler.keyPressed.Escape) {
            this.current = 'quit'
        } else if(input.keyboardHandler.keyPressed[' ']) {
            this.current = 'action'
        } else {
            this.current = 'idle'
        }
    }
}