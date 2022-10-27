import Game from '../game/Game.js'
export default class Conker {
    constructor() {
        if(Conker.initialised) {
            throw new Error('Conker already initialised')
        }
        Conker.initialised = true;
        this.game = new Game();
    }
    update(dt) {
        this.game.update(dt)
        this.quit = this.game.quit;
    }
}