import Vec2 from "../../application/dataStructures/Vec2.js";

export default class Transform{
    constructor() {
        this.position = new Vec2();
        this.rotation = 0;
        this.scale = new Vec2(1,1)
    }
}