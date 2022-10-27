import Application from '../application/Application.js'
import AssettManager from './AssettManager.js';
import Display from './Display.js';
import InputHandler from "./inputHandler.js";

export default class Platform {
    constructor() {
        if(Platform.initialised) {
            throw new Error('Platform already Initialised')
        }
        Platform.initialised = true;
        this.inputHandler = new InputHandler()
        this.application = new Application()
        this.display = new Display();
        this.assettManager = new AssettManager()
        this.assettManager.load('baron')
        this.lastTime = 0;
        this.isRunning = true;
        this.fps = document.getElementById('fps')
        this.init();
    }
    tick(timeStamp) {
        let dt = timeStamp - this.lastTime;
        this.lastTime = timeStamp;
        this.update(dt);
        this.render();
        this.fps.innerText = `FPS: ${(1000 / dt).toFixed(0)}`
        if(this.isRunning) {
            window.requestAnimationFrame(this.tick.bind(this))
        } else {
            console.log('bye')
        }
    }
    update(dt) {
        this.assettManager.update()
        this.inputHandler.update(dt)
        this.application.update(dt)
        this.isRunning = !this.application.quit;
    }
    render() {
    }
    init() {
        window.requestAnimationFrame(this.tick.bind(this))
    }
}