// fish.js
import { Actor, Vector, Color, Label, Font, FontUnit } from "excalibur";
import { Resources } from './resources.js';
import { Tower } from './tower.js';

export class Fish extends Actor {
    constructor(value) {
        super({ width: Resources.Fish.width, height: Resources.Fish.height });

        const sprite = Resources.Fish.toSprite();
        
        if (value === 0) {
            this.hp = 100;
            this.speed = 80
        } else if (value === 1) {
            sprite.tint = new Color(0, 0, 255); // dark blue
            this.hp = 150;
            this.speed = 60
        } else if (value === 2) {
            sprite.tint = new Color(255, 100, 0); //green
            this.hp = 70;
            this.speed = 120
        }

        this.graphics.use(sprite);
        this.graphics.flipHorizontal = true
        this.pos = new Vector(0, 390);

        this.label = new Label({
            text: 'Score: 0',
            pos: new Vector(10, 20),
            font: new Font({
                family: 'impact',
                size: 24,
                unit: FontUnit.Px,
                color: new Color(255, 255, 255)
            })
        });

        this.addChild(this.label);
        this.label.text = `${this.hp}`;

        this.path = [
            new Vector(210, 390),
            new Vector(210, 185),
            new Vector(465, 185),
            new Vector(465, 455),
            new Vector(820, 455),
            new Vector(820, 330),
            new Vector(1240, 330)
        ];

        for (let i = 0; i < this.path.length; i++) {
            this.actions.moveTo(this.path[i].x, this.path[i].y, this.speed);
        }
    }

    // onInitialize() {
        
    // }

    takeDamage(amount) {
        this.hp -= amount;
        if (this.hp <= 0) {
            this.kill(); // Remove enemy from the game if health is 0 or below
        }
        this.label.text = `${this.hp}`;
    }

    onPostKill() {
        // this.scene.engine.updateScore()
    }

    onPostUpdate() {
        if (this.pos.x >= 1180) {
            this.kill()
            this.scene.healthAmount--
            this.scene.label.text = `${this.scene.healthAmount}`;
        }
    }
}
