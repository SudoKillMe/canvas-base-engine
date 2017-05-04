
type Callback = (...arg) => any;

interface CanvasInterface {
    getCanvas(): HTMLCanvasElement;
    getContext(): CanvasRenderingContext2D;
}

class Canvas implements CanvasInterface {

    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;

    constructor(selectors: string, width: number=300, height: number=150) {
        this.canvas = document.querySelector(selectors);
        if ( !this.canvas ) {
            throw new Error('invalid selector');
        }
        this.context = this.canvas.getContext('2d');
        this.canvas.width = width;
        this.canvas.height = height;
    }

    getCanvas(): HTMLCanvasElement {
        return this.canvas;
    }

    getContext(): CanvasRenderingContext2D {
        return this.context;
    }

    bindEvent(name: string, callback: Callback ): void {
        this.canvas.addEventListener( name, function(event) {
            callback.call(this, event);
        } );
    }

}

export { Canvas };