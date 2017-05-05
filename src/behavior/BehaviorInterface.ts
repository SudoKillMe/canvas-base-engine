import { SpriteInterface } from '../sprite';

interface BehaviorInterface {
    execute(sprite: SpriteInterface, context: CanvasRenderingContext2D, now: number): void;
}

export { BehaviorInterface };