
import Intent from "../components/Intent.js";
import Entity from "./Entity.js";

export default class Player extends Entity {
    constructor() {
        super();
        this.action = "idle";
        this.direction = "down";
        this.intent = new Intent();
        this.controller = 'player'
        this.speed = 20;
        this.transform.scale = {x: 2, y: 2}
    }

}
