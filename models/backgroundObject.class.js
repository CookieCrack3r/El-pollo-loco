class BackgroundObject extends MovableObject{
    
    height = 580;
    width = 1280;

    constructor(imagePath, x, y){
        super().loadImage(imagePath);
        this.x = x;
        this.y = y;
    }
}