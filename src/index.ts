import { PolygonPainter } from './painter/PolygonPainter';
import { RectanglePainter } from './painter/RectanglePainter';
import { ImagePainter } from './painter/ImagePainter';
import { MoveLeftToRight } from './behavior/MoveLeftToRight';
import { RunInPlace } from './behavior/RunInPlace';
import { Sprite } from './sprite';

let canvas: HTMLCanvasElement = document.querySelector('#canvas');
let context: CanvasRenderingContext2D = canvas.getContext('2d');

canvas.width = 1000;
canvas.height = 500;

let img = '/src/static/images/mario.png';
let cells = [
    { left: 0, top: 0, width: 16, height: 32 },
    { left: 16, top: 0, width: 16, height: 32 },
    { left: 32, top: 0, width: 16, height: 32 },
    { left: 48, top: 0, width: 16, height: 32 }
];
let sprite = new Sprite('polygon', (new ImagePainter(img, cells)), [(new RunInPlace),MoveLeftToRight]);
sprite.left = 400;
sprite.top = 200;
sprite.width = 52;
sprite.height = 62;

let sprite2 = new Sprite('mario', (new ImagePainter(img, cells)), [(new RunInPlace), MoveLeftToRight] );

sprite2.left = 200;
sprite2.top = 100;
sprite2.width = 52;
sprite2.height = 62;

let last = 0;

function animate(time) {
    console.log('time:', time);
    context.clearRect(0, 0, canvas.width, canvas.height);

    sprite.update(context, time);
    sprite.paint(context);
    
    sprite2.update(context, time);
    sprite2.paint(context);

    window.requestAnimationFrame(animate);
}

window.requestAnimationFrame(animate);

canvas.addEventListener('click', function(e) {
    console.log(e.clientX);
});

// let i = new Image();
// i.src = '/src/static/images/small_bg.png';
// i.onload = function () {
//     context.drawImage(i, 0, 0);
// }