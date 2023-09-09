class Character extends MovableObject{

    IMAGES_WALKING = [
        'img/img_pollo_locco/2_character_pepe/1_idle/idle/I-1.png',
        'img/img_pollo_locco/2_character_pepe/1_idle/idle/I-2.png',
        'img/img_pollo_locco/2_character_pepe/1_idle/idle/I-3.png',
        'img/img_pollo_locco/2_character_pepe/1_idle/idle/I-4.png',
        'img/img_pollo_locco/2_character_pepe/1_idle/idle/I-5.png',
        'img/img_pollo_locco/2_character_pepe/1_idle/idle/I-6.png',
        'img/img_pollo_locco/2_character_pepe/1_idle/idle/I-7.png',
        'img/img_pollo_locco/2_character_pepe/1_idle/idle/I-8.png',
        'img/img_pollo_locco/2_character_pepe/1_idle/idle/I-9.png',
        'img/img_pollo_locco/2_character_pepe/1_idle/idle/I-10.png'
    ];


    constructor(){
        super().loadImage('img/img_pollo_locco/2_character_pepe/1_idle/idle/I-1.png');
        this.loadImages(this.IMAGES_WALKING);

        this.animate();
    }

    animate() {

        setInterval(() => {
            let i =  this.currentImage % this.IMAGES_WALKING.length;
            let path = this.IMAGES_WALKING[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 350);
    
    }

    jump(){
        
    }
}