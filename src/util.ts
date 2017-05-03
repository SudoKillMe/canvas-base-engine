import { Point } from './point';

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

/**
 * 画矩形框： 给出任意两个点画一个矩形
 * 鼠标点下的点为 origin
 * 鼠标现在所在的位置为 current
 */
function drawReact(
    context: CanvasRenderingContext2D,
    origin: Point,
    current: Point
): void
{
    context.save();

    let start_x = Math.min( origin.x, current.x );
    let start_y = Math.min( origin.y, current.y );
    let width = Math.abs( origin.x - current.x );
    let height = Math.abs( origin.y - current.y );
    context.strokeRect( start_x, start_y, width, height );
 
    context.restore();
}

export { window2Canvas, drawReact };