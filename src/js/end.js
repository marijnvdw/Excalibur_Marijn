import '../css/style.css';
import { Actor, Engine, Vector, Label, Font, FontUnit, Color, Scene } from "excalibur";
import { Resources, ResourceLoader } from './resources.js';
import { Level } from './level.js';
import { Button } from './button.js';

export class End extends Scene {
    constructor() {
        super()
        const button = new Button
        this.add(button)
    }
}