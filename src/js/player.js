import { Actor, Engine, Vector, Color, Keys } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class Player extends Actor {

    constructor() {
        super({width: Resources.Fish.width, height: Resources.Fish.height})
    }

    onInitialize(){
        this.speedUp = 70

        const sprite = Resources.Fish.toSprite()
        sprite.tint = new Color(255,0,0)

        this.graphics.use(sprite)
        this.pos = new Vector(150, 150)
        this.vel = new Vector(0,0) 

        this.on('collisionstart', (event) => this.hitSomething(event))

    }

    onPreUpdate(engine) {
        let xspeed = 0;
        let yspeed = 0;
        if (engine.input.keyboard.isHeld(Keys.Left)) {
          xspeed = -this.speedUp;
          this.graphics.flipHorizontal = false
        } 
    
        if (engine.input.keyboard.isHeld(Keys.Right)) {
          xspeed = this.speedUp;
          this.graphics.flipHorizontal = true
        } 

        if (engine.input.keyboard.isHeld(Keys.Up)) {
          yspeed = -this.speedUp;
        } 
    
        if (engine.input.keyboard.isHeld(Keys.Down)) {
          yspeed = this.speedUp;
        } 

        this.vel = new Vector(xspeed, yspeed);



        if (this.pos.x < -50) {
            this.pos.x = 849
        }
        if (this.pos.x > 850) {
            this.pos.x = -49
        }

        if (this.pos.y < -50) {
            this.pos.y = 649
        }
        if (this.pos.y > 650) {
            this.pos.y = -49
        }
      }


    hitSomething(event) {
        event.other.kill()
        this.speedUp += 20

    }

    

}