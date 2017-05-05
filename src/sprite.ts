/**
 * 精灵对象  
 * 精灵是一个独立物体的抽象概念，一个精灵包括精灵的位置，大小，形状，行为等
 * 创建一个精灵需要提供一个精灵的名称，然后提供一个绘制器(Painter)来实现绘制精灵，这可以实现解耦
 * 还需要提供精灵的行为，是一个数组；每一个行为都是一个对象，含有一个execute方法
 */

import { BehaviorInterface } from './behavior/BehaviorInterface';
import { PainterInterface } from './painter/PainterInterface';

type Size = {
    top: number;
    left: number;
    width: number;
    height: number;
}

interface SpriteInterface {
    // top: number;
    // left: number;
    // width: number;
    // height: number;
    // velocityX: number; //水平速度
    // velocityY: number; //垂直速度
    behaviors: Array<BehaviorInterface>;
    painter: PainterInterface;

    // 调用Painter来绘制精灵
    paint(context: CanvasRenderingContext2D): void;
    // 遍历行为来依次调用行为对象里的execute方法
    update(context: CanvasRenderingContext2D, time: number): void;
}

class Sprite implements SpriteInterface {

    top = 0;
    left = 0;
    width = 10;
    height = 10
    velocityX = 1;
    velocityY = 1;

    behaviors: Array<BehaviorInterface>;
    painter: PainterInterface;

    constructor(name: string, painter: PainterInterface, behaviors?: Array<BehaviorInterface>) {
        this.painter = painter;
        this.behaviors = behaviors;
    }

    paint(context: CanvasRenderingContext2D): void {
        this.painter.paint(this, context);
    }

    update(context: CanvasRenderingContext2D): void {
        for( let i = 0; i < this.behaviors.length; i++ ) {
            this.behaviors[i].execute(this, context, 0);
        }
    }

}

export { SpriteInterface, Sprite };