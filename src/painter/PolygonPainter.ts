import { PainterInterface } from './PainterInterface';
import { Sprite } from '../sprite/Sprite';
import { Polygon } from '../shape/polygon';


let PolygonPainter: PainterInterface;
PolygonPainter = {
    /**
     * TODO 每调用一次该方法，就会创建一个Polygon对象，浪费内存。试着解决该问题
     */
    paint(sprite: Sprite, context: CanvasRenderingContext2D): void {
        new Polygon(
            sprite.center_x,
            sprite.center_y,
            sprite.radius,  
            sprite.sides
        ).stroke(context);
    }
};

// class PolygonPainter implements PainterInterface {

//     static singleInstance = null;

//     static single(): PolygonPainter {
//         if (!PolygonPainter.singleInstance) {
//             PolygonPainter.singleInstance = new PolygonPainter();
//         }
//         return PolygonPainter.singleInstance;
//     }

//     constructor() {
//     }

//     paint(sprite: Sprite, context: CanvasRenderingContext2D) {
//         new Polygon(
//             sprite.left + sprite.width / 2,
//             sprite.top + sprite.height / 2,
//             sprite.width/2,
//             6
//         ).stroke(context);
//     }   
// }

export { PolygonPainter };