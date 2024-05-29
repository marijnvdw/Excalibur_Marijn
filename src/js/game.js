import '../css/style.css';
import { Actor, Engine, Vector, Label, Font, FontUnit, Color } from "excalibur";
import { Resources, ResourceLoader } from './resources.js';
import { Level } from './level.js';
import { Begin } from './begin.js';
import { End } from './end.js';

export class Game extends Engine {

    constructor() {
        super({width: 1280, height: 720})
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame(){
        localStorage.removeItem("Won");
        this.add('begin', new Begin())
        this.add('level', new Level())
        this.add('end', new End())
        this.goToScene('begin')
    }
}

new Game();