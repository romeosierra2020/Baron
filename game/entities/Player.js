import Model from "../components/Model.js";
import SpriteManager from "../components/SpriteManager.js";
import Transform from "../components/Transform.js";

export default class Player {
    constructor() {
        this.transform = new Transform();
        this.model = new Model();
        this.spriteManager = new SpriteManager();
    }
}