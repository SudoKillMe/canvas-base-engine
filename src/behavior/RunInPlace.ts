import { BehaviorInterface } from './BehaviorInterface';
import { SpriteInterface, Sprite } from '../sprite';

class RunInPlace implements BehaviorInterface {

    interval: number;
    lastTime: number;

    constructor() {
        this.interval = 200;
        this.lastTime = 0;
    }

    execute(sprite: SpriteInterface, context: CanvasRenderingContext2D, now: number): void {
        if ( now - this.lastTime > this.interval ) {
            sprite.painter.advance();
            this.lastTime = now;
        }
    }
}

export { RunInPlace };