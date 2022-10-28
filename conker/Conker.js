import Game from '../game/Game.js'
export default class Conker {
    constructor() {
        if(Conker.initialised) {
            throw new Error('Conker already initialised')
        }
        Conker.initialised = true;
        this.assettsRequired = [];
        this.game = new Game();
    }
    update(dt, input) {
        this.game.update(dt, input)
        if(this.game.assetsRequired.length> 0) {

            this.assettsRequired = [...this.game.assetsRequired]

        } 
        if(this.allAssettsLoaded) this.game.allAssettsLoaded = true;
        this.quit = this.game.quit;
    }
    render() {
        this.game.render();
        this.renderObjects = this.game.renderObjects;
    }
}