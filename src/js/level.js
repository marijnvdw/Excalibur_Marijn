import '../css/style.css';
import { Actor, Engine, Vector, Label, Font, FontUnit, Color, Scene } from "excalibur";
import { Resources, ResourceLoader } from './resources.js';
import { Fish } from './fish.js';
import { Tower } from './tower.js';

export class Level extends Scene {

    timer = 150;
    order = [0,0,0,0,1]
    amount = 0

    constructor() {
        super({ width: 1280, height: 720 });
        //this.showDebug(true);
        //this.start(ResourceLoader).then(() => this.startGame());
    }

    onActivate() {
        this.timer = 299;
        this.healthAmount = 100;
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
            pos: new Vector(1200, 113),
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
            if (this.timer === 300) {
                const fish = new Fish(this.order[this.amount]);
                this.add(fish); 
                
                console.log(this.order[this.amount])

                this.timer = 0
                this.amount++
            }
        } //else {
        //     this.amount = 0
        //     this.engine.goToScene('end')
        // }
    }

    onPostUpdate() {
        this.timer++;
        this.levelOne()
    }
}


