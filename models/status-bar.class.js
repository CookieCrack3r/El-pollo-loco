class StatusBar extends DrawableObject {

    IMAGES = [
        'img/img_pollo_locco/7_statusbars/1_statusbar/2_statusbar_health/blue/0.png',
        'img/img_pollo_locco/7_statusbars/1_statusbar/2_statusbar_health/blue/20.png',
        'img/img_pollo_locco/7_statusbars/1_statusbar/2_statusbar_health/blue/40.png',
        'img/img_pollo_locco/7_statusbars/1_statusbar/2_statusbar_health/blue/60.png',
        'img/img_pollo_locco/7_statusbars/1_statusbar/2_statusbar_health/blue/80.png',
        'img/img_pollo_locco/7_statusbars/1_statusbar/2_statusbar_health/blue/100.png',
    ];

    percentage = 100;


    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.x = 100;
        this.y = 100;
        this.setPercentage =  100;

    }


    setPercentage() {
        this.percentage = this.percentage;
        let path = this.IMAGES[this.resolveImageIndex()]
        this.img = this.imageCache[path];
    }

    resolveImageIndex() {
        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage > 80) {
            return 4;
        } else if (this.percentage > 60) {
            return 3;
        } else if (this.percentage > 40) {
            return 2;
        } else if (this.percentage > 20) {
            return 1;
        } else {
            return 0;
        }
    }

}