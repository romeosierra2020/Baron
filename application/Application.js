import Conker from '../conker/Conker.js'

export default class Application{
    constructor() {
        if(Application.initialised) {
            throw new Error('Application is already initialised')
        }
        Application.initialised = true;
        this.isRunning = true;
        this.conker = new Conker();
        this.assettsRequired = [];
    }
    update(dt, input) {
        this.conker.update(dt, input);
        if(this.conker.assettsRequired.length>0) {
            this.assettsRequired = this.conker.assettsRequired;
        }
        if(this.allAssettsLoaded) this.conker.allAssettsLoaded = true;
        this.quit = this.conker.quit;
    }
    render() {
        this.conker.render();
        this.renderObjects = this.conker.renderObjects;
    }
}