import GamepadHandler from "./GamepadHandler.js";
import KeyboardHandler from "./KeyboardHandler.js";
import MouseHandler from "./MouseHandler.js";

export default class InputHandler {
    constructor() {
        this.keyboardHandler = new KeyboardHandler();
        this.mouseHandler = new MouseHandler();
        this.gamepadHandler = new GamepadHandler();
        this.keyboardHandler.init();
    }
    update(platformAPI) {
        
    }
}