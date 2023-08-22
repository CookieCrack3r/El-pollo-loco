class Chicken extends MovableObject{

    constructor(){
        super().loadImage('img/img_pollo_locco/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.x = 200 + Math.random() * 500;
        this.y = 400;
        this.height = 80;
        this.width  = 50;
    }
}