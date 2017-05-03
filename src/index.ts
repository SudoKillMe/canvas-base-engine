import { Polygon } from './polygon';
import { Point } from './point';
import { window2Canvas, drawReact } from './util';
/**
 * TODO:
 * 使用离屏CANVAS实现将一个图片放大
 * 实现橡皮筋式选取框
 * 使用canvas实现对图像的处理，比如滤镜，浮雕效果之类  -- 优先级较低，在完成其他任务之后再完成
 */
let range = document.querySelector('#range');
let text = document.querySelector('#text');

let canvas: HTMLCanvasElement = document.querySelector('#canvas'),
    context: CanvasRenderingContext2D = canvas.getContext('2d');

let offCanvas = document.createElement('canvas');
let offContext = offCanvas.getContext('2d');

let dragging = false;
let mousedown; 
let current;
let originCanvas;
let choosenImage;
canvas.width = 1000;
canvas.height = 500;

let p = new Polygon(100, 100, 50, 6);
p.stroke(context);

let polygon = new Polygon(canvas.width / 2, canvas.height / 2,100,6);
let image = new Image();
image.src = '/src/static/images/1.jpg';
image.onload = function () {
    //context.drawImage(image, 0, 0, canvas.width, canvas.height);
    //offContext.drawImage(image, 0, 0, canvas.width, canvas.height);
    
}

function storeOriginCanvas() {
    originCanvas = context.getImageData(0, 0, canvas.width, canvas.height);
}
function coverByOriginCanvas() {
    context.putImageData(originCanvas, 0, 0);
}
function updateChoosenImage( current ) {
    console.log('current', current);
    console.log('mousedown', mousedown);
    //choosenImage = context.getImageData(mousedown.x, mousedown.y, Math.abs(current.x - mousedown.x), Math.abs(current.y - mousedown.y));


}

// 拖动
canvas.addEventListener('mousedown', function(event) {
    console.log('mousedown');
    mousedown = window2Canvas(canvas, event.clientX, event.clientY);
    if ( p.pointInside( mousedown ) ) {
        dragging = true;
        if ( !originCanvas )
            storeOriginCanvas();
    }
});

canvas.addEventListener('mousemove', function(event) {
    console.log('mousemove');
    if ( !dragging )  return;
    if ( originCanvas )
        coverByOriginCanvas();
    current = window2Canvas( canvas, event.clientX, event.clientY );
});

canvas.addEventListener('mouseup', function(event) {});


//  画图
// canvas.addEventListener('mousedown', function(event) {
//     console.log('mousedown');
//     dragging = true;
//     mousedown = window2Canvas(canvas, event.clientX, event.clientY);
//     if ( !originCanvas )
//         storeOriginCanvas();
// });

// canvas.addEventListener('mousemove', function(event) {
//     console.log('mousemove');
//     if ( !dragging ) return;
//     if ( originCanvas ) {
//         coverByOriginCanvas();
//     }
//     current = window2Canvas(canvas, event.clientX, event.clientY);
//     drawReact(context, mousedown, current);
//     if ( current.x != mousedown.x && current.y != mousedown.y )
//         updateChoosenImage(current);
// });

// canvas.addEventListener('mouseup', function(event) {
//     console.log('mouseup');
//     dragging = false;
//     if ( originCanvas ) {
//         coverByOriginCanvas();
//     }
//     console.log(choosenImage);
//     // excellent
//     context.drawImage(canvas, mousedown.x, mousedown.y, Math.abs( current.x - mousedown.x ), Math.abs( current.y - mousedown.y ), 0, 0, canvas.width, canvas.height);
// });

// setInterval( function() {
//     context.putImageData(drawSurface, 0, 0);
//     polygon.move(polygon.center_x + 10, polygon.center_y );
//     polygon.stroke(context);
// }, 1000 );

// document.addEventListener('keydown', function (event) {
//     let code = event.keyCode || event.which;
//     console.log(code);
//     if ( code == 39 ) {  // right
//         context.putImageData(drawSurface, -10, 0);
//         drawSurface = context.getImageData(0, 0, canvas.width, canvas.height);
//         //polygon.move(polygon.center_x + 10, polygon.center_y);
//         polygon.stroke(context);
//     } else if ( code == 37 ) {  // left
//         context.putImageData(drawSurface, 10, 0);
//         drawSurface = context.getImageData(0, 0, canvas.width, canvas.height);
//         //polygon.move(polygon.center_x - 10, polygon.center_y);
//         polygon.stroke(context);
//     }
// });
