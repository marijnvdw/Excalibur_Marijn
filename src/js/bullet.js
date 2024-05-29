// bullet.js
import { Actor, Vector, Color } from "excalibur";

export class Bullet extends Actor {
    constructor(x, y, target) {
        super({
            pos: new Vector(x, y),
            radius: 8,
            color: Color.Red
        });

        this.target = target;
        this.speed = 400;
    }

    onInitialize() {
        this.actions.meet(this.target, this.speed);
    }

    onPreUpdate() {
        if (this.pos.distance(this.target.pos) < 5) {
            this.kill();
            this.target.takeDamage(10);
        }
    }
}
