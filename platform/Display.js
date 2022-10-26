import Globals from "../Globals"

export default class Display{
    constructor() {
        Globals.gameWidth = window.innerWidth;
        Globals.gameHeight = window.innerHeight;
        this.canvas = document.createElement('canvas')
        
    }
}