import { PainterInterface } from './PainterInterface';
import { Sprite } from '../sprite';
import { Polygon } from '../shape/polygon';

class PolygonPainter implements PainterInterface {

    static singleInstance = null;

    static single(): PolygonPainter {
        if (!PolygonPainter.singleInstance) {
            PolygonPainter.singleInstance = new PolygonPainter();
        }
        return PolygonPainter.singleInstance;
    }

    constructor() {
    }

    paint(sprite: Sprite, context: CanvasRenderingContext2D) {
        new Polygon(
            sprite.left + sprite.width / 2,
            sprite.top + sprite.height / 2,
            sprite.width/2,
            6
        ).stroke(context);
    }   
}

export { PolygonPainter };