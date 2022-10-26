import KeyboardHandler from "./KeyboardHandler.js";

export default class InputHandler {
    constructor() {
        this.keyboardHandler = new KeyboardHandler();
        this.keyboardHandler.init();
    }
    update(platformAPI) {
        platformAPI.keyPressed = this.keyboardHandler.keyPressed;
    }
}