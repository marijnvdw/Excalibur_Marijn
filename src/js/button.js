import '../css/style.css';
import { Actor, Engine, Vector, Label, Font, FontUnit, Color, Scene, ScreenElement } from "excalibur";
import { Resources, ResourceLoader } from './resources.js';

export class Button extends ScreenElement {
    constructor() {
        super()
        this.graphics.use(Resources.StartButton.toSprite());
        this.pos = new Vector(980, 470);
        this.scale = new Vector(0.5, 0.5);
        this.on('pointerdown', () => this.scene.engine.goToScene('level'))
    }
}