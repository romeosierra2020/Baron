export default class Utils {
    static clamp(a,b,val) {
        let min, max;
        if(a < b) {
            min = a;
            max = b;
        } else {
            min = b;
            max = a;
        }
        if(val < min) return min;
        if(val > max) return max;
        return val;
    }
}