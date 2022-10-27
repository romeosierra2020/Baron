import Conker from '../conker/Conker.js'

export default class Application{
    constructor() {
        if(Application.initialised) {
            throw new Error('Application is already initialised')
        }
        Application.initialised = true;
        this.isRunning = true;
        this.conker = new Conker();
    }
    update(dt) {
        this.conker.update(dt);
        this.quit = this.conker.quit;
    }
}