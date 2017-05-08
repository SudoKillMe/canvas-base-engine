import { BehaviorInterface } from './BehaviorInterface';
import { SpriteInterface } from '../sprite/Sprite';

const GRAVITY = 9.8;
const TOTAL_HEIGHT = 500; // 1000 meter;

let begin_v = 0;
let begin_t = 0;
let direction = 'down';
let Drop: BehaviorInterface;
Drop = {
    execute(sprite: SpriteInterface, context: CanvasRenderingContext2D, now: number): void {
        let duration =  now / 1000;
        if (direction == 'down') {
            console.log('down');
            console.log(' duration - begin_t', duration - begin_t);
            sprite.velocityY = GRAVITY * (duration - begin_t);
            sprite.center_y += sprite.velocityY;
        } else if (direction == 'up') {
            console.log('up');
            // console.log('begin_v:', begin_v);
            // console.log('begin_t:', begin_t);
            sprite.velocityY = (begin_v - GRAVITY * (duration - begin_t));
            // console.log(sprite.velocityY);
            sprite.center_y -= sprite.velocityY;
            // console.log('center_y,', sprite.center_y);
        }

        if ( sprite.center_y - sprite.radius > 500 ) {  //反弹向上
           console.log('向上');
           sprite.center_y = 500 - sprite.radius;
            begin_t = duration;
            begin_v = 2*sprite.velocityY/3;

            direction = 'up';
        } else if ( sprite.velocityY < 0 ){  //向下
            console.log('向下');
            begin_t = duration;
            begin_v = 0;

            direction = 'down';
        }




        // sprite.velocityY = 
        // sprite.center_x -= 
    }
};

export { Drop };