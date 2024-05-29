import '../css/style.css';
import { Actor, Engine, Vector, Label, Font, FontUnit, Color, Scene } from "excalibur";
import { Resources, ResourceLoader } from './resources.js';
import { Level } from './level.js';
import { Button } from './button.js';

export class End extends Scene {
    constructor() {
        super()

        const background = new Actor();
        background.graphics.use(Resources.BackgroundBegin.toSprite());
        background.pos = new Vector(640, 360);
        background.scale = new Vector(1, 1);
        background.z = -1;
        this.add(background);

        const button = new Button
        this.add(button)

        this.label = new Label({
            text: `End of the game, you can try again if you want, ty for playing`,
            pos: new Vector(100, 113),
            font: new Font({
                family: 'impact',
                size: 45,
                unit: FontUnit.Px,
                color: new Color(255, 255, 255)
            })
        });
        this.add(this.label);
    }
}