export default class GamepadHandler{
    constructor() {
        if(GamepadHandler.initialsed) {
            throw new Error('GamepadHandler already initialised')
        }
        GamepadHandler.initialsed = true;
    }
}