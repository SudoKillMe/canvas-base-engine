import { PolygonPainter } from './painter/PolygonPainter';
import { MoveLeftToRight } from './behavior/MoveLeftToRight';
import { Sprite } from './sprite';

let canvas: HTMLCanvasElement = document.querySelector('#canvas');
let context: CanvasRenderingContext2D = canvas.getContext('2d');

canvas.width = 1000;
canvas.height = 500;

let sprite = new Sprite('polygon', PolygonPainter.single(), [MoveLeftToRight]);
sprite.top = 200;
sprite.left = 500;
sprite.width = 100;
sprite.height = 100;

function animate() {
    console.log('trigger');
    context.clearRect(0, 0, canvas.width, canvas.height);

    sprite.update(context);
    sprite.paint(context);

    window.requestAnimationFrame(animate);
}

window.requestAnimationFrame(animate);

canvas.addEventListener('click', function(e) {
    console.log(e.clientX);
});