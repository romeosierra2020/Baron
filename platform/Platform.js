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
        this.application.update(dt, this.inputHandler)
        if(this.application.assettsRequired.length>0) {
            for(let i = 0; i<this.application.assettsRequired.length; i++) {
                this.assettManager.load(this.application.assettsRequired[i])
            }
        }
        if(this.assettManager.allAssettsLoaded) {
            this.application.allAssettsLoaded = true;
        }
        this.isRunning = !this.application.quit;
    }
    render() {
        this.application.render()
        this.display.render(this.application.renderObjects, this.assettManager)
    }
    init() {
        window.requestAnimationFrame(this.tick.bind(this))
    }
}