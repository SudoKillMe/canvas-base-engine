import { PolygonPainter } from './painter/PolygonPainter';
import { RectanglePainter } from './painter/RectanglePainter';
import { ImagePainter } from './painter/ImagePainter';
import { MoveLeftToRight } from './behavior/MoveLeftToRight';
import { Sprite } from './sprite';

let canvas: HTMLCanvasElement = document.querySelector('#canvas');
let context: CanvasRenderingContext2D = canvas.getContext('2d');

canvas.width = 1000;
canvas.height = 500;

let img = '/src/static/images/m.jpg';
let sprite = new Sprite('polygon', (new ImagePainter(img)), [MoveLeftToRight]);
sprite.left = 400;
sprite.top = 200;
sprite.width = 52;
sprite.height = 62;

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

// let i = new Image();
// i.src = '/src/static/images/small_bg.png';
// i.onload = function () {
//     context.drawImage(i, 0, 0);
// }