class MovableObject {
    x = 0;

    height = 300;
    width = 150;

    img;
    imageCache = [];
    currentImage = 0;
    speed = 0.15;
    speedY = 0;
    acceleration = 2.5;
    otherDirection = false;

    applyGravity() {
        setInterval(() => {
            if (this.isGrounded()) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 15);

    }

    isGrounded() {
        return this.y < 100;
    }

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    playAnimation(images) {
        let i = this.currentImage % this.IMAGES_WALKING.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    moveRight() {
        console.log('Moving right');
    }

    moveLeft(speed) {
        setInterval(() => { this.x -= this.speed; }, 1000 / 60);
    }

}