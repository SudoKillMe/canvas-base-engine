import { PointInterface } from './point';

interface ShapeInterface {
    
    pointInside(point: PointInterface ): boolean;
}

export { ShapeInterface };
