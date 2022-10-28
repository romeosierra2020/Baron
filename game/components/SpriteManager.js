import baron from "../../assetts/spritesheets/baron.json" assert { type: "json" };

export default class SpriteManager {
    constructor() {
        this.spritesheet = baron;
        this.currentAction = "idle";
        this.currentDirection = "down";
        this.currentSequencePosition = 0;
        this.timeSinceLastUpdate = 0;
        this.timeBetweenUpdates = 150;
    }
    update(dt, sequence, direction, speed) {
        this.timeBetweenUpdates = 2400 / speed
        this.timeSinceLastUpdate += dt;
        if (this.currentAction !== sequence || this.currentDirection !== direction) {
            this.currentAction = sequence;
            this.currentDirection = direction;
            this.currentSequencePosition = 0;
            this.timeSinceLastUpdate = 0;
        }
        if (this.timeSinceLastUpdate > this.timeBetweenUpdates) {
            this.timeSinceLastUpdate -= this.timeBetweenUpdates;
            this.currentSequencePosition++

            if(this.currentSequencePosition >= this.spritesheet.sequencies[this.currentAction][this.currentDirection].length) {
                this.currentSequencePosition = 0;
                if(this.currentAction === 'hurt') {
                    this.currentSequencePosition = this.spritesheet.sequencies[this.currentAction][this.currentDirection].length -1
                } else 
                if(
                    this.currentAction !== 'walk' 
                    
                ) {
                    this.currentAction = 'idle';
                    this.actionChanged = true;
                }
            }
        }
        this.spritePosition = {...this.spritesheet.sequencies[this.currentAction][this.currentDirection][this.currentSequencePosition]}
        this.spritePosition.x *= this.spritesheet.spriteSize.x;
        this.spritePosition.y *= this.spritesheet.spriteSize.y;

        this.spriteDimensions = this.spritesheet.spriteDimensions;
    }
}
