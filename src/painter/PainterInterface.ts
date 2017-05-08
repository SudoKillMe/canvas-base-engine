import { Sprite } from '../sprite/Sprite';

interface PainterInterface {
    paint(sprite: Sprite, context: CanvasRenderingContext2D): void;
}

export { PainterInterface };