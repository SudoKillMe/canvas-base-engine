import { PainterInterface } from './painter/PainterInterface';
import { CirclePainter } from './painter/CirclePainter';
import { Drop } from './behavior/Drop';
import { Sprite } from './sprite/Sprite';

let canvas: HTMLCanvasElement = document.querySelector('#canvas');
let context: CanvasRenderingContext2D = canvas.getContext('2d');

canvas.width = 1000;
canvas.height = 500;

let ballSprite = new Sprite('ball', CirclePainter, [ Drop ] );
ballSprite.center_x = 300;
ballSprite.center_y = 30;
ballSprite.radius = 10;
ballSprite.startAngle = 0;
ballSprite.endAngle = Math.PI * 2;
ballSprite.anticlockwise = false;

ballSprite.paint(context);

function animate(time) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    ballSprite.update(context, time);
    ballSprite.paint(context);

    requestAnimationFrame(animate);
}

requestAnimationFrame(animate);