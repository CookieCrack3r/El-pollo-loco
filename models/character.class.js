class Character extends MovableObject {
    speed = 10;
    y = 0;
    x = 100;
    world;

    IMAGES_WALKING = [
        'img/img_pollo_locco/2_character_pepe/2_walk/W-21.png',
        'img/img_pollo_locco/2_character_pepe/2_walk/W-22.png',
        'img/img_pollo_locco/2_character_pepe/2_walk/W-23.png',
        'img/img_pollo_locco/2_character_pepe/2_walk/W-24.png',
        'img/img_pollo_locco/2_character_pepe/2_walk/W-25.png',
        'img/img_pollo_locco/2_character_pepe/2_walk/W-26.png'
    ];

    IMAGES_JUMPING = [
        'img/img_pollo_locco/2_character_pepe/3_jump/J-31.png',
        'img/img_pollo_locco/2_character_pepe/3_jump/J-32.png',
        'img/img_pollo_locco/2_character_pepe/3_jump/J-33.png',
        'img/img_pollo_locco/2_character_pepe/3_jump/J-34.png',
        'img/img_pollo_locco/2_character_pepe/3_jump/J-35.png',
        'img/img_pollo_locco/2_character_pepe/3_jump/J-36.png',
        'img/img_pollo_locco/2_character_pepe/3_jump/J-37.png',
        'img/img_pollo_locco/2_character_pepe/3_jump/J-38.png',
        'img/img_pollo_locco/2_character_pepe/3_jump/J-39.png',
    ];

    IMAGES_DEAD = [
        'img/img_pollo_locco/2_character_pepe/5_dead/D-51.png',
        'img/img_pollo_locco/2_character_pepe/5_dead/D-52.png',
        'img/img_pollo_locco/2_character_pepe/5_dead/D-53.png',
        'img/img_pollo_locco/2_character_pepe/5_dead/D-54.png',
        'img/img_pollo_locco/2_character_pepe/5_dead/D-55.png',
        'img/img_pollo_locco/2_character_pepe/5_dead/D-56.png',
        'img/img_pollo_locco/2_character_pepe/5_dead/D-57.png',

    ];

    IMAGES_HURT = [
        'img/img_pollo_locco/2_character_pepe/4_hurt/H-41.png',
        'img/img_pollo_locco/2_character_pepe/4_hurt/H-42.png',
        'img/img_pollo_locco/2_character_pepe/4_hurt/H-43.png'
    ];

    walking_sound = new Audio('audio/walking.mp3');

    constructor() {
        super().loadImage('img/img_pollo_locco/2_character_pepe/1_idle/idle/I-1.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.applyGravity(200);
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.walking_sound.pause();
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x && !this.isGrounded(200)) {
               this.moveRight();
               this.otherDirection = false;
               this.walking_sound.play();
            }

            if (this.world.keyboard.LEFT && this.x > 0 && !this.isGrounded(200)) {
                this.moveLeft();
                this.otherDirection = true;

                this.walking_sound.play();

            }

            if(this.world.keyboard.SPACE && !this.isGrounded(200)){
               this.jump();
            }

            this.world.camera_x = -this.x + 100;
        }, 1000 / 60);

        setInterval(() => {

            if(this.isDead()){
                this.playAnimation(this.IMAGES_DEAD);
            } else if(this.isHurt()) {
                this.playAnimation(this.IMAGES_HURT);
            } else if (this.isGrounded(200)) {
                this.playAnimation(this.IMAGES_JUMPING);
            } else {

                if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                    this.playAnimation(this.IMAGES_WALKING);
                }
            }


        }, 100);
    }

    jump() {
        this.speedY = 30;
    }
}