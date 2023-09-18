class Chicken extends MovableObject {
    y = 418;

    IMAGES_WALKING = [
        'img/img_pollo_locco/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/img_pollo_locco/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/img_pollo_locco/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];

    constructor() {
        super().loadImage('img/img_pollo_locco/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKING);

        this.x = 200 + Math.random() * 500;
        this.speed = 0.15 + Math.random() * 0.25;

        this.height = 80;
        this.width = 50;

        this.animate();
    }

    animate() {


        setInterval(() => {
            this.moveLeft();

        }, 1000 / 60);



        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 250);

    }
}