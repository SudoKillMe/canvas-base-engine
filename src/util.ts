import { Point } from './points';

function window2Canvas(
    canvas: HTMLCanvasElement,
    x: number,
    y: number
): Point
{
    let canvasRect = canvas.getBoundingClientRect();
    return new Point(
        x - canvasRect.left,
        y - canvasRect.top
    );
}
