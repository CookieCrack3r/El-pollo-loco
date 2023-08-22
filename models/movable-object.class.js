class MovableObject {
    x = 10;
    y = 180;

    height = 300;
    width = 150;

    img;

    loadImage(path){
        this.img = new Image();
        this.img.src = path;
    }
    moveRight() {
        console.log('Moving right');
    }

    moveLeft() {
        console.log('Moving right');
    }
   
}