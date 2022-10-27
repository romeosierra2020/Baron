export default class MouseHandler {
    constructor(){
        if(MouseHandler.initialised) {
            throw new Error('MouseHandler already initialised')
        }
        MouseHandler.initialised = true;
    }
}