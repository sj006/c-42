class Umbrella {
    constructor(x,y){
        var options = {
            'isStatic': true,
        }
        this.body = Bodies.circle(x,y,50,options);
        this.radius = 50;
        this.best_image = loadImage("bat/Bestman-01.png");

        this.image = loadImage("Walking Frame/walking_1.png","Walking Frame/walking_2.png","Walking Frame/walking_3.png","Walking Frame/walking_4.png","Walking Frame/walking_5.png","Walking Frame/walking_6.png","Walking Frame/walking_7.png","Walking Frame/walking_8.png");
        World.add(world, this.body)
    }

    display(){
        var pos = this.body.position;
        imageMode(CENTER);
       
        if(frameCount >= 200){
            image(this.best_image, pos.x, pos.y+70, 200, 200);
        }else{
            image(this.image, pos.x, pos.y+70, 300, 300);
        }
    }
}

