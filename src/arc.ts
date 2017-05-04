import { PointInterface, Point } from './point';
import { ShapeInterface } from './shape';

interface ArcInterface {
    createPath(context: CanvasRenderingContext2D): void;
    stroke(context: CanvasRenderingContext2D): void;
    fill(context: CanvasRenderingContext2D): void;
    move(x: number, y: number): void;
}

class Arc implements ArcInterface, ShapeInterface {
    center_x: number;
    center_y: number;
    radius: number;
    startAngle: number;
    endAngle: number;
    anticlockwise: boolean;

    constructor(
        center_x: number,
        center_y: number,
        radius: number,
        startAngle: number,
        endAngle: number,
        anticlockwise: boolean = false
    )
    {
        this.center_x = center_x;
        this.center_y = center_y;
        this.radius = radius;
        this.startAngle = startAngle;
        this.endAngle = endAngle;
        this.anticlockwise = anticlockwise;
    }

    pointInside(point: Point): boolean {
        if (Math.sqrt(Math.pow(point.x - this.center_x, 2) + Math.pow(point.y - this.center_y, 2)) > this.radius)
            return false;

        return true;
    }

    createPath(context: CanvasRenderingContext2D): void {
        context.beginPath();
        context.arc(this.center_x, this.center_y, this.radius, this.startAngle, this.endAngle, this.anticlockwise);
        context.closePath();
    }

    stroke(context: CanvasRenderingContext2D): void {
       // context.save();
        this.createPath(context);
        context.stroke();
       // context.restore();
    }

    fill(context: CanvasRenderingContext2D): void {
        context.save();
        this.createPath(context);
        context.fill();
        context.restore();
    }

    move(x: number, y: number): void {
        this.center_x = x;
        this.center_y = y;
    }
}

export { Arc };