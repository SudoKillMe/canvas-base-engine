interface PointInterface {
    x: number;
    y: number;
}

class Point implements PointInterface {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

export { PointInterface, Point };