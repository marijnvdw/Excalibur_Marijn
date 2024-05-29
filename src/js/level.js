import '../css/style.css';
import { Actor, Engine, Vector, Label, Font, FontUnit, Color, Scene } from "excalibur";
import { Resources, ResourceLoader } from './resources.js';
import { Fish } from './fish.js';
import { Tower } from './tower.js';

export class Level extends Scene {

    timer = 150;
    order = [0,0,0,0,1]
    //order = [0,0,0,0,1,0,0,2,2,0,0,2,2,1,1,0,2,0,2,1,1,1,2,1,0,1,1,2,1,0,1,0,0,0,1,2,1,1,3]
    amount = 0
    moneyAmount = 100
    intervalTime = 400
    killed = 0

    constructor() {
        super({ width: 1280, height: 720 });
    }

    onActivate() {

        const Won = localStorage.getItem("Won");
        if (Won) {
            this.order = [0,1,0,0,1,1,1,2,2,1,0,2,2,1,1,0,2,1,2,1,1,1,2,1,2,1,1,2,1,2,1,0,1,0,1,2,1,1,3]
        }

        this.timer = 299;
        this.healthAmount = 5;
        this.moneyAmount = 100
        
        const background = new Actor();
        background.graphics.use(Resources.Background.toSprite());
        background.pos = new Vector(640, 360);
        background.scale = new Vector(2.15, 1.8);
        background.z = -1;
        this.add(background);

        this.money = new Label({
            text: `${this.moneyAmount}`,
            pos: new Vector(70, 50),
            font: new Font({
                family: 'impact',
                size: 24,
                unit: FontUnit.Px,
                color: new Color(255, 255, 255)
            })
        });
        this.add(this.money);

        const moneyImg = new Actor();
        moneyImg.graphics.use(Resources.Money.toSprite());
        moneyImg.pos = new Vector(40, 60);
        moneyImg.scale = new Vector(0.1, 0.1);
        this.add(moneyImg);
        
        const tower = new Tower(335, 330);
        this.add(tower);

        const tower2 = new Tower(645, 310);
        this.add(tower2);

        const tower3 = new Tower(1000, 180);
        this.add(tower3);

        const tower4 = new Tower(940, 460);
        this.add(tower4);

        const castle = new Actor();
        castle.graphics.use(Resources.Castle.toSprite());
        castle.pos = new Vector(1250, 280);
        castle.scale = new Vector(1.5, 1.5);
        this.add(castle);

        const Heart = new Actor();
        Heart.graphics.use(Resources.Heart.toSprite());
        Heart.pos = new Vector(1220, 130);
        Heart.scale = new Vector(0.08, 0.08);
        this.add(Heart);

        this.label = new Label({
            text: `${this.healthAmount}`,
            pos: new Vector(1214, 113),
            font: new Font({
                family: 'impact',
                size: 24,
                unit: FontUnit.Px,
                color: new Color(255, 255, 255)
            })
        });
        this.add(this.label);
        
    }

    levelOne(){
        if (this.order.length != this.amount) {
            if (this.timer === this.intervalTime) {
                const fish = new Fish(this.order[this.amount]);
                this.add(fish); 

                this.timer = 0
                this.amount++
                this.intervalTime = this.intervalTime - 5
            }
        }     
    }

    onPostUpdate() {
        this.timer++;
        this.levelOne()

        if (this.healthAmount === 0) {
            this.toEndScreen()
        }

        if (this.killed === this.order.length){
            localStorage.setItem("Health", this.healthAmount);
            localStorage.setItem("Won", 1);
            this.toEndScreen()
        }
    }

    toEndScreen() {
        this.amount = 0
        this.killed = 0
        this.killAllActors();
        this.engine.goToScene('end')
    }

    killAllActors() {
        this.actors.forEach(actor => {
            actor.kill();
        });
    }
}


