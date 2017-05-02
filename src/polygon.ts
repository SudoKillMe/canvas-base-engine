import { PointInterface, Point } from './points';

interface PolygonInterface {
    center_x: number;
    center_y: number;
    radius: number;
    sides: number;
    startAngle?: number;

    getPoints(): Array<PointInterface>;
    createPath(context: CanvasRenderingContext2D): void;
    stroke(context: CanvasRenderingContext2D): void;
    fill(context: CanvasRenderingContext2D): void;
    move(x: number, y: number): void;
}

class Polygon implements PolygonInterface {

    center_x: number;
    center_y: number;
    radius: number;
    sides: number;
    startAngle: number;

    constructor(
        center_x: number,
        center_y: number,
        radius: number,
        sides: number,
        startAngle: number = 0
    ) 
    {
        this.center_x = center_x;
        this.center_y = center_y;
        this.radius = radius;
        this.sides = sides;
        this.startAngle = startAngle;
    }

    getPoints(): Array<PointInterface> {
        let points = [];

        let angle = (2 * Math.PI) / this.sides;
        let c_angle = this.startAngle;
        for ( let i = 0; i < this.sides; i++ ) {
            points.push( new Point(
                this.center_x + this.radius * (Math.cos(c_angle)),
                this.center_y + this.radius * (Math.sin(c_angle))
            ) );
            c_angle += angle;
        }

        return points;
    }

    createPath( context: CanvasRenderingContext2D ): void {
        let points = this.getPoints();
        console.log(points);
        context.beginPath();
        context.moveTo( points[0].x, points[0].y );
        for ( let i = 1; i < this.sides; i++ ) {
            context.lineTo( points[i].x, points[i].y );
        }
        context.closePath();
    }

    stroke( context: CanvasRenderingContext2D ): void {
        context.save();
        this.createPath(context);
        context.stroke();
        context.restore();
    }

    fill( context: CanvasRenderingContext2D ): void {
        context.save();
        this.createPath(context);
        context.fill();
        context.restore();
    }

    move( x: number, y: number ): void {
        this.center_x = x;
        this.center_y = y;
    }
}

export { Polygon };