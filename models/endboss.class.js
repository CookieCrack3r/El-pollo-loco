class Endboss extends MovableObject {
    width = 500;
    height = 500;
    y = -200;
    x = 700;

    IMAGES_WALKING = [
        'img/img_pollo_locco/4_enemie_boss_chicken/2_alert/G5.png',
        'img/img_pollo_locco/4_enemie_boss_chicken/2_alert/G6.png',
        'img/img_pollo_locco/4_enemie_boss_chicken/2_alert/G7.png',
        'img/img_pollo_locco/4_enemie_boss_chicken/2_alert/G8.png',
        'img/img_pollo_locco/4_enemie_boss_chicken/2_alert/G9.png',
        'img/img_pollo_locco/4_enemie_boss_chicken/2_alert/G10.png',
        'img/img_pollo_locco/4_enemie_boss_chicken/2_alert/G11.png',
        'img/img_pollo_locco/4_enemie_boss_chicken/2_alert/G12.png'
    ];

   

    constructor(){
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.animate();
        this.applyGravity(50);

    }
    
    animate(){
        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
         }, 250);
    }
}