import { Polygon } from './polygon';
//TODO：使用离屏CANVAS实现将一个图片放大
//TODO: 实现橡皮筋式选取框
//TODO：使用canvas实现对图像的处理，比如滤镜，浮雕效果之类  -- 优先级较低，在完成其他任务之后再完成
let canvas: HTMLCanvasElement = document.querySelector('#canvas'),
    context: CanvasRenderingContext2D = canvas.getContext('2d');
context.translate( canvas.width / 2, canvas.height / 2 );

canvas.width = 1000;
canvas.height = 500;

let drawSurface
let polygon = new Polygon(canvas.width / 2, canvas.height / 2,100,6);
let image = new Image();
image.crossOrigin = "Anonymous";
image.src = '/src/static/images/small_bg.png';
image.onload = function () {
   context.drawImage( image, 0, 0, canvas.width*10, canvas.height );
   drawSurface = context.getImageData(0, 0, canvas.width, canvas.height);
   console.log(drawSurface);
   polygon.stroke(context);
}





// setInterval( function() {
//     context.putImageData(drawSurface, 0, 0);
//     polygon.move(polygon.center_x + 10, polygon.center_y );
//     polygon.stroke(context);
// }, 1000 );

document.addEventListener('keydown', function (event) {
    let code = event.keyCode || event.which;
    console.log(code);
    if ( code == 39 ) {  // right
        context.putImageData(drawSurface, -10, 0);
        drawSurface = context.getImageData(0, 0, canvas.width, canvas.height);
        //polygon.move(polygon.center_x + 10, polygon.center_y);
        polygon.stroke(context);
    } else if ( code == 37 ) {  // left
        context.putImageData(drawSurface, 10, 0);
        drawSurface = context.getImageData(0, 0, canvas.width, canvas.height);
        //polygon.move(polygon.center_x - 10, polygon.center_y);
        polygon.stroke(context);
    }
});
