import Application from '../application/Application.js'
import InputHandler from "./inputHandler.js";

export default class Platform {
    constructor() {
        if(Platform.initialised) {
            throw new Error('Platform already Initialised')
        }
        Platform.initialised = true;
        this.inputHandler = new InputHandler()
        this.application = new Application()
    }
    update() {
        this.inputHandler.update()
        this.application.update()
        //app, gamepad
    }
    render() {
        //objs from app
    }
}