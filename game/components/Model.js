import Vec2 from "../../application/dataStructures/Vec2.js";

export default class Model{
    constructor() {
        this.type = 'sprite';
        this.radius = 0;
        this.size = new Vec2(64,64);
        this.points = [];
        this.spritesheet = 'baron'
        this.spritePosition = new Vec2();
        this.spriteSize = new Vec2(64,64)
    }
}