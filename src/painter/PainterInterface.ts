import { Sprite } from '../sprite';

interface PainterInterface {
    paint(sprite: Sprite, context: CanvasRenderingContext2D): void;
}

export { PainterInterface };