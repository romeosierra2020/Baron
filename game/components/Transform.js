import Vec2 from "../../application/dataStructures/Vec2.js";

export default class Transform{
    constructor(position = new Vec2(), rotation = 0, scale = new Vec2(1,1)) {
        this.position = {...position};
        this.rotation = rotation;
        this.scale = {...scale}
    }
}