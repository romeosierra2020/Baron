import Globals from "../Globals.js"

export default class Display{
    constructor(context) {
        Globals.gameWidth = window.innerWidth;
        Globals.gameHeight = window.innerHeight;
        this.canvas = document.createElement('canvas')
        this.canvas.width = Globals.gameWidth;
        this.canvas.height = Globals.gameHeight;
        switch(context) {
            case 'gl':
                this.gl = this.canvas.getContext('webgl2')
                this.update = this.glUpdate;
                this.render = this.glRender;
                break;
            default:
                this.ctx = this.canvas.getContext('2d')
                this.update = this.ctxUpdate
                this.render = this.ctxRender;
        }
        document.querySelector('body').appendChild(this.canvas)

    }
    glUpdate(){}
    glRender(){}
    ctxUpdate(){}
    ctxRender(){}
}