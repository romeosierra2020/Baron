import Player from "./entities/Player.js";

export default class Game {
    constructor() {
        if (Game.initialised) {
            throw new Error("Game already initialised");
        }
        Game.initialised = true;
        this.quit = false;
        this.player = new Player();
        this.assetsRequired = [];
        this.gameState = "initialising";
    }
    update(dt, input) {
        switch (this.gameState) {
            case "initialising": {
                this.assetsRequired = ["baron"];
                this.gameState = "loading";
                break;
            }
            case "loading": {
                this.assetsRequired = [];
                if(this.allAssettsLoaded) this.gameState = 'ready'
                break;
            }
            case "ready": {
                this.player.update(dt, input)
            }
        }
    }
    render(){
        this.renderObjects = [];
        this.player.render()
        if(this.gameState === 'ready') this.renderObjects.push(this.player.renderObject)

    }
}
