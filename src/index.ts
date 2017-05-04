/**
 * 实现放大镜的功能 利用绘制自身的原理
 */

import { Canvas } from './canvas';
import { Arc } from './arc';
import { Polygon } from './polygon';
import { window2Canvas } from './util';

let canvasObj = new Canvas('#canvas', 1000, 500);
let canvas = canvasObj.getCanvas();
let context = canvasObj.getContext();

//  全局变量
let offset = { x: 0, y: 0 };
let glassRect = { x: 0, y: 0 };
let dragging;
let originImageData;
let glassImageData;
//
let arc = new Arc(200, 200, 100, 0, 2 * Math.PI);
// let arc = new Polygon(200, 200, 100, 4, Math.PI/4);
let image = new Image();
image.src = '/src/static/images/1.jpg';
image.onload = function() {
    context.drawImage(image, 0, 0, canvas.width, canvas.height);
    saveOriginImage();
    arc.stroke(context);
    glassRect.x = arc.center_x - arc.radius;
    glassRect.y = arc.center_y - arc.radius;
}

function saveOriginImage() {
    originImageData = context.getImageData(0, 0, canvas.width, canvas.height);
}

function saveGlassImage() {
    console.log('rect_x', glassRect.x);
    console.log('rect_y', glassRect.y);
    glassImageData = context.getImageData(glassRect.x, glassRect.y, arc.radius*2, arc.radius*2);
}

function restoreOriginImage() {
    context.putImageData(originImageData, 0, 0);
}

function restoreGlassImage() {
    context.putImageData(glassImageData, glassRect.x, glassRect.y);
}

function setClip() {
    context.beginPath();
    context.arc(200, 200, 100, 0, 2*Math.PI);
    context.clip();
}

function drawGlass() {
    // context.clearRect(0, 0, canvas.width, canvas.height); return;
    console.log('radius:', arc.radius);
    context.drawImage(canvas, 
                    glassRect.x, 
                    glassRect.y,
                    arc.radius*2,
                    arc.radius*2,
                    glassRect.x - arc.radius,
                    glassRect.y - arc.radius,
                    arc.radius*4,
                    arc.radius*4);
}

canvasObj.bindEvent('mousedown', function(event) {
    console.log('mousedown');
    let current = window2Canvas(canvas, event.clientX, event.clientY);
    offset.x = current.x - arc.center_x;
    offset.y = current.y - arc.center_y;
    dragging = true;
    //saveGlassImage();
});

canvasObj.bindEvent('mousemove', function(event) {
    console.log('mousemove');
    if ( !dragging ) return;
    let current = window2Canvas(canvas, event.clientX, event.clientY);
    if ( originImageData ) {
        restoreOriginImage();
    }
    if ( glassImageData ) {
        restoreGlassImage();
    }
    arc.center_x = current.x - offset.x;
    arc.center_y = current.y - offset.y;
    glassRect.x = arc.center_x - arc.radius;
    glassRect.y = arc.center_y - arc.radius;
    saveGlassImage();

    context.save();
    // arc.move(current.x - offset.x, current.y - offset.y);
    // arc.stroke(context);
    context.beginPath();
    context.arc(arc.center_x, arc.center_y, 100, 0, 2*Math.PI);
    context.clip();
    // context.save();
    drawGlass();

    context.restore();
    context.beginPath();
    context.arc(current.x - offset.x, current.y - offset.y, 100, 0, 2 * Math.PI);
    context.stroke();

});

canvasObj.bindEvent('mouseup', function(event) {
    console.log('mouseup');
    dragging = false;
    let current = window2Canvas(canvas, event.clientX, event.clientY);
    if (originImageData) {
        restoreOriginImage();
    }
    arc.move(current.x - offset.x, current.y - offset.y);
    arc.stroke(context);
});
