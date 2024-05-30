// tower.js
import { Actor, Vector, Color, Circle, Label, Font, FontUnit } from "excalibur";
import { Resources } from './resources.js';
import { Bullet } from './bullet.js';
import { Fish } from './fish.js';

export class Tower extends Actor {
    tier = 0;
    list = [Resources.Tier1.toSprite(), Resources.Tier2.toSprite(), Resources.Tier3.toSprite(), Resources.Tier4.toSprite(), Resources.Tier5.toSprite()];
    radius = 200;
    bulletSpeed = 200;
    rangeIndicator;
    listInterval = [10000000, 500, 450, 400, 350, 300];
    listCost = [50, 75, 100, 125, 150,]


    constructor(position_x, position_y) {
        super({ width: Resources.Tier0.width, height: Resources.Tier0.height });

        const sprite = Resources.Tier0.toSprite();
        this.graphics.use(sprite);

        this.pos = new Vector(position_x, position_y);

        this.rangeIndicator = new Actor({
            pos: new Vector(0, 0),
            width: this.radius * 2.2,
            height: this.radius * 2.2,
            anchor: new Vector(0.5, 0.5)
        });

        this.rangeIndicator.graphics.use(new Circle({
            radius: this.radius,
            color: Color.Transparent,
            strokeColor: Color.Yellow,
            strokeThickness: 1 
        }));

        this.addChild(this.rangeIndicator);
        this.rangeIndicator.z = -1; 
        this.rangeIndicator.visible = false;

        this.on("pointerup", () => this.OnClicked());

        this.shootingInterval = 100000000;
        this.timeSinceLastShot = 0;

        const title = new Label
        title.text = 'Upgrade $50'
        title.pos = new Vector(-67, 50)
        title.font = new Font({
            family: 'fantasy',
            size: 25,
            unit: FontUnit.Px,
            color: new Color(255, 255, 255),
            shadow: {
                blur: 1,
                offset: new Vector(-7, 7),
                color: Color.Gray
            }
        })
        this.addChild(title)
    }

    OnClicked() {
        if (this.tier < 5) {
            if (this.scene.moneyAmount >= this.listCost[this.tier]) {
            const sprite = this.list[this.tier];
            this.graphics.use(sprite);
            this.tier++;
            this.updateProperties();
            }
        }
    }

    updateProperties() {
            this.shootingInterval = this.listInterval[this.tier]

            if (this.tier< this.listCost.length) {
                this.children[1].pos.y = this.children[1].pos.y + 10
                this.children[1].text = `Upgrade $${this.listCost[this.tier]}`
            } else {
                this.children[1].kill()
            }

            this.scene.moneyAmount = this.scene.moneyAmount - this.listCost[this.tier - 1]
            this.scene.money.text = `${this.scene.moneyAmount}`;

            console.log(this.listCost[this.tier - 1])
    }

    shoot(target) {
        const bullet = new Bullet(this.pos.x, this.pos.y, target, this.bulletSpeed);
        this.scene.add(bullet);
    }

    onPreUpdate(engine, delta) {
        this.timeSinceLastShot += delta;

        if (this.timeSinceLastShot >= this.shootingInterval) {
            const enemies = engine.currentScene.actors.filter(actor => actor instanceof Fish);
            if (enemies.length > 0) {
                const target = enemies.find(enemy => this.pos.distance(enemy.pos) <= this.radius);
                if (target) {
                    this.shoot(target);
                }
            }
            this.timeSinceLastShot = 0;
        }
    }
}
