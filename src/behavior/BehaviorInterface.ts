import { SpriteInterface } from '../sprite/Sprite';

interface BehaviorInterface {
    execute(sprite: SpriteInterface, context: CanvasRenderingContext2D, now: number): void; 
}

export { BehaviorInterface };