import { PainterInterface } from '../painter/PainterInterface';

interface AnimatorInterface {
    painters: Array<PainterInterface>;

    start(): void;
    end(): void;
}

export { AnimatorInterface };