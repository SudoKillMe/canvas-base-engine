import { PainterInterface } from './PainterInterface';
import { Sprite } from '../sprite';
import { Rectangle } from '../shape/rectangle';   

let RectanglePainter: PainterInterface;
RectanglePainter = {

    paint(sprite: Sprite, context: CanvasRenderingContext2D): void {
        new Rectangle(
            sprite.left, 
            sprite.top, 
            sprite.width, 
            sprite.height
        ).stroke(context);
    }
};

export { RectanglePainter };