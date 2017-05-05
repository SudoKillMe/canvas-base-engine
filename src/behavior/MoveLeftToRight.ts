import { BehaviorInterface } from './BehaviorInterface';
import { SpriteInterface, Sprite } from '../sprite';

let MoveLeftToRight: BehaviorInterface;
MoveLeftToRight = {
    execute(sprite: Sprite, context: CanvasRenderingContext2D, now: number): void {
        console.log(context.canvas.width);
        if ( sprite.left >= context.canvas.width ) {
            sprite.velocityX = -1;
        } else if ( sprite.left <= 0 ) {
            sprite.velocityX = 1;
        }
        console.log(sprite.left);
        sprite.left += sprite.velocityX; 
    }
};

export { MoveLeftToRight };