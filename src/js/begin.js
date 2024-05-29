import '../css/style.css';
import { Actor, Vector, Label, Font, FontUnit, Color, Scene } from "excalibur";
import { Resources, ResourceLoader } from './resources.js';
import { Level } from './level.js';
import { Button } from './button.js';

export class Begin extends Scene {
    constructor() {
        super();
        
        const background = new Actor();
        background.graphics.use(Resources.BackgroundBegin.toSprite());
        background.pos = new Vector(640, 360);
        background.scale = new Vector(1, 1);
        background.z = -1;
        this.add(background);

        const button = new Button();
        this.add(button);

        this.createLabel('Welcome to Fish Invasion', new Vector(120, 100), 70, true);
        this.createLabel('The goal of the game is to defend', new Vector(120, 200), 50);
        this.createLabel('the town from the Fish Invasion.', new Vector(120, 250), 50);

        const highestScore = localStorage.getItem("Health");
        
        if (highestScore) {
            console.log(highestScore);
            this.createLabel(`Your HighScore is ${highestScore}`, new Vector(120, 400), 50);
        }
    }

    createLabel(text, position, size, withShadow = false) {
        const label = new Label({
            text: text,
            pos: position,
            font: new Font({
                family: 'fantasy',
                size: size,
                unit: FontUnit.Px,
                color: new Color(255, 255, 255),
                shadow: withShadow ? {
                    blur: 5,
                    offset: new Vector(-10, 10),
                    color: Color.Red
                } : undefined
            })
        });
        this.add(label);
    }
}

