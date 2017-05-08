import { PainterInterface } from './PainterInterface';
import { Arc } from '../shape/arc';
import { Sprite } from '../sprite/Sprite';

let CirclePainter: PainterInterface;
CirclePainter = {

    paint(sprite: Sprite, context: CanvasRenderingContext2D): void {
        new Arc(
            sprite.center_x,
            sprite.center_y,
            sprite.radius,
            sprite.startAngle,
            sprite.endAngle,
            sprite.anticlockwise
        ).fill(context);
    }
};

export { CirclePainter };