import '../css/style.css';
import { Actor, Engine, Vector, Label, Font, FontUnit, Color, Scene } from "excalibur";
import { Resources, ResourceLoader } from './resources.js';
import { Level } from './level.js';
import { Button } from './button.js';

export class Begin extends Scene {
    constructor() {
        super()
        const button = new Button
        this.add(button)

        const tile = new Label
        tile.text = 'Welcome to Fish Invasion'
        tile.pos = new Vector(120,100)
        tile.font = new Font({
            family: 'fantasy',
            size: 70,
            unit: FontUnit.Px,
            color: new Color(255, 255, 255),
            shadow: {
                blur: 5,
                offset: new Vector(-10,10),
                color: Color.Red
              }
        })
        this.add(tile)

        const explanation = new Label
        explanation.text = `The goal of the game is to defend`
        explanation.pos = new Vector(120,200)
        explanation.font = new Font({
            family: 'fantasy',
            size: 50,
            unit: FontUnit.Px,
            color: new Color(255, 255, 255)
        })
        this.add(explanation)

        const explanation1 = new Label
        explanation1.text = `the town from the Fish Invation.`
        explanation1.pos = new Vector(120,250)
        explanation1.font = new Font({
            family: 'fantasy',
            size: 50,
            unit: FontUnit.Px,
            color: new Color(255, 255, 255)
        })
        this.add(explanation1)


    }
}