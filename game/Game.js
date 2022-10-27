import Player from "./entities/Player.js";

export default class Game {
    constructor() {
        if(Game.initialised) {
            throw new Error('Game already initialised')
        }
        Game.initialised = true;
        this.quit = false;
        this.player = new Player();
        this.gameState = 'loading'
    }
    update(dt) {
        switch(this.gameState) {
            case 'loading': {
                this.assetsRequired = ['baron']
                this.gameState = 
            }

        }
        
    }
}