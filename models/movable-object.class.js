class MovableObject extends DrawableObject {
    speed = 0.15;
    speedY = 0;
    acceleration = 2.5;
    otherDirection = false;
    energy = 100;
    lastHit = 0;

    applyGravity(ground) {
        setInterval(() => {
            if (this.isGrounded(ground) || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 15);

    }

    isGrounded(ground) {
        return this.y < ground;
    }




    isCollision(mo) {
        return this.x + this.width > mo.x &&
            this.y + this.height > mo.y &&
            this.x < mo.x &&
            this.y < mo.y + mo.height;
    }

    hit() {

        this.energy -= 5;
        if (this.energy >= 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();

        }
    }

    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000;
        return timepassed < 2;
    }

    isDead() {
        return this.energy == 0;
    }
    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    moveRight() {
        this.x += this.speed;

    }

    moveLeft(speed) {
        this.x -= this.speed;

    }

    jump() {
        this.speedY = 30;
    }
}