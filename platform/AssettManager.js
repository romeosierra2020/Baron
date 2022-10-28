import Assett from "./Assett.js";

export default class AssettManager{
    constructor() {
        if(AssettManager.initialised) {
            throw new Error('AssettManager Already Initialised')
        }
        AssettManager.initialised = true;
        this.allAssettsLoaded = true;
        this.currentAssetts = {};

    }
    load(assett) {
        if(this.currentAssetts[assett]) return;
        this.allAssettsLoaded = false;
        this.currentAssetts[assett] = new Assett('spritesheet', `${assett}.png`)
    }
    update() {
        let assetts = Object.keys(this.currentAssetts);
        let assettsLoaded = 0;
        for(let i = 0; i<assetts.length; i++) {
            if(this.currentAssetts[assetts[i]].isLoaded) {
                assettsLoaded++;
            }
        }
        if(assettsLoaded === assetts.length) {
            this.allAssettsLoaded = true;

        }
    }
}