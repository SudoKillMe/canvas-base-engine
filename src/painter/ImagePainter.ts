import { PainterInterface } from './PainterInterface';
import { Sprite } from '../sprite';

type Cell = {
    left: number;
    top: number;
    width: number;
    height: number;
}

class ImagePainter implements PainterInterface {

    image: HTMLImageElement;
    index: number;
    cells: Array<Cell>;

    constructor(url: string, cells: Array<Cell>=[]) {
        this.image = new Image();
        this.image.src = url;
        this.index = 0;
        this.cells = cells;
    }

    advance(): void {
        if ( this.index == this.cells.length - 1 ) {
            this.index = 1;
        } else {
            this.index++;
        }     
    }

    paint(sprite: Sprite, context: CanvasRenderingContext2D): void {
        if ( !this.image.complete ) return;
        let cell = this.cells[this.index];
        context.drawImage(
            this.image,
            cell.left,
            cell.top,
            cell.width,
            cell.height,
            sprite.left,
            sprite.top,
            sprite.width,
            sprite.height
        );
    }
}

export { ImagePainter };