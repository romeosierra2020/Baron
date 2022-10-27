export default class Assett{
    constructor(type, fileName) {
        switch(type) {
            case "spritesheet": {
                this.type = 'spritesheet';
                this.isLoaded = false;
                this.image = new Image();
                this.image.src = `../assetts/spritesheets/${fileName}`
                this.image.onload = () => {
                    this.isLoaded = true;
                }
            }
        }
    }
}