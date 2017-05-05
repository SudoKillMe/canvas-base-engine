import { PainterInterface } from './PainterInterface';
import { Sprite } from '../sprite';

class ImagePainter implements PainterInterface {

    image: HTMLImageElement;
    constructor(url: string) {
        this.image = new Image();
        this.image.src = url;
    }

    paint(sprite: Sprite, context: CanvasRenderingContext2D): void {
        if ( !this.image.complete ) return;
        context.drawImage(
            this.image,
            sprite.left,
            sprite.top,
            sprite.width,
            sprite.height
        );
    }
}

export { ImagePainter };