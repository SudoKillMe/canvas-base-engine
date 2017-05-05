import { PointInterface, Point } from './point';
import { ShapeInterface } from './ShapeInterface';

interface RectangleInterface {
    left: number;
    top: number;
    width: number;
    height: number;

    stroke(context: CanvasRenderingContext2D): void;
    fill(context: CanvasRenderingContext2D): void;
    move(x: number, y: number): void;
}

class Rectangle implements RectangleInterface {

    left: number;
    top: number;
    width: number;
    height: number;

    constructor(left: number, top: number, width: number, height: number) {
        this.left = left;
        this.top = top;
        this.width = width;
        this.height = height;
    }

    stroke(context: CanvasRenderingContext2D): void {
        context.save();
        context.strokeRect(this.left, this.top, this.width, this.height);
        context.restore();
    } 

    fill(context: CanvasRenderingContext2D): void {
        context.save();
        context.fillRect(this.left, this.top, this.width, this.height);
        context.restore();
    }

    move(x: number, y: number): void {
        this.left = x; 
        this.top = y;
    }
}   

export { Rectangle };