import Vec2 from "../../application/dataStructures/Vec2.js";
import Model from "../components/Model.js";
import SpriteManager from "../components/SpriteManager.js";
import Transform from "../components/Transform.js";

export default class Entity{
    constructor() {
        this.transform = new Transform();
        this.model = new Model();
        this.spriteManager = new SpriteManager();
        this.size = new Vec2(64, 64);
        this.renderObject = {};
    }
    update(dt, input) {
        
        switch(this.controller) {
            case "player": {
                this.intent.update(input)
                break;
            }
            case "ai": {
                break;
            }
            case "static": {
                break;
            }
            default: {

            }
        }
        switch (this.intent.current) {
            case "moveUp": {
                this.action = "walk";
                this.direction = "up";
                this.transform.position.y -= (this.speed * dt) / 1000 * this.transform.scale.y;
                break;
            }
            case "moveLeft": {
                this.action = "walk";
                this.direction = "left";
                this.transform.position.x -= (this.speed * dt) / 1000 * this.transform.scale.x;
                break;
            }
            case "moveDown": {
                this.action = "walk";
                this.direction = "down";
                this.transform.position.y += (this.speed * dt) / 1000 * this.transform.scale.y;
                break;
            }
            case "moveRight": {
                this.action = "walk";
                this.direction = "right";
                this.transform.position.x += (this.speed * dt) / 1000 * this.transform.scale.x;
                break;
            }
            case "action": {
                this.action = "hurt";
                this.direction = 'down'
                break;
            }
            default: {
                if (this.action === "walk") {
                    this.action = "idle";
                }
            }
        }
        this.spriteManager.update(dt, this.action, this.direction, this.speed);
        if (this.spriteManager.actionChanged) {
            this.action = this.spriteManager.currentAction;
            this.spriteManager.actionChanged = false;
        }
        this.model.spritePosition = this.spriteManager.spritePosition;
    }
    render() {
        this.renderObject.transform = this.transform;
        this.renderObject.renderModel = this.model;
        this.renderObject.size = this.size;
    }
}