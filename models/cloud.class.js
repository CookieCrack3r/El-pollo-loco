class Cloud extends MovableObject {
    y = 10;
    height = 300;
    width = 500;

    constructor() {
        super().loadImage('img/img_pollo_locco/5_background/layers/4_clouds/1.png');
        this.x = 100 + Math.random() * 500;
        this.y = 10 + Math.random() * 2;
        this.speed = 0.15 + Math.random() * 0.25;
        this.animate();
    }

    animate(){
        this.moveLeft();
    }

}