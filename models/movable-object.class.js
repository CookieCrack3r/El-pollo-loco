class MovableObject {
    x = 10;
    y = 10;

    height = 200;
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