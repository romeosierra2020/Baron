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
    ctxRender(renderObjects, assetManager){
        this.ctx.clearRect(0,0,Globals.gameWidth, Globals.gameHeight)
        for(let i = 0; i < renderObjects.length; i++) {
            let image = assetManager.currentAssetts[renderObjects[i].renderModel.spritesheet].image;
            let sx = renderObjects[i].renderModel.spritePosition.x;
            let sy = renderObjects[i].renderModel.spritePosition.y;
            let sw = renderObjects[i].renderModel.spriteSize.x;
            let sh = renderObjects[i].renderModel.spriteSize.x;;
            let dx = renderObjects[i].transform.position.x + 100 - (renderObjects[i].size.x * renderObjects[i].transform.scale.x)/2;
            let dy = renderObjects[i].transform.position.y + 100 - (renderObjects[i].size.y * renderObjects[i].transform.scale.y)/2;
            let dw = renderObjects[i].size.x * renderObjects[i].transform.scale.x;
            let dh = renderObjects[i].size.y * renderObjects[i].transform.scale.y;
            this.ctx.drawImage(image, sx,sy,sw,sh,dx,dy,dw,dh)
        }
    }
}