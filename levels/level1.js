let level1;

function initLevel() {

level1 = new Level(
    [
        new Chicken(1000),
        new Chicken(1500),
        new Chicken(2000),
        new Chicken(2500),
        new Smallchicken(1250),
        new Smallchicken(1750),
        new Smallchicken(2250),
        new Smallchicken(2750),
    ],
    [
        new Endboss()
    ],
    [
        new Cloud(0),
        new Cloud(300),
        new Cloud(600),
        new Cloud(1500)
    ],
    [
        new BackgroundObject('img/5_background/layers/air.png', -719),
        new BackgroundObject('img/5_background/layers/3_third_layer/2.png', -719), 
        new BackgroundObject('img/5_background/layers/2_second_layer/2.png', -719),
        new BackgroundObject('img/5_background/layers/1_first_layer/2.png', -719),

        new BackgroundObject('img/5_background/layers/air.png', 0),                                                                    
        new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 0),  
        new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 0), 
        new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 0),   
    
        new BackgroundObject('img/5_background/layers/air.png', 719),
        new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719),
        new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719),
        new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719),
    
    
        new BackgroundObject('img/5_background/layers/air.png', 719*2),
        new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 719*2),
        new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 719*2),
        new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 719*2),
    
        new BackgroundObject('img/5_background/layers/air.png', 719*3),
        new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719*3), 
        new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719*3),
        new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719*3),
    
        new BackgroundObject('img/5_background/layers/air.png', 719*4),
        new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 719*4), 
        new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 719*4),
        new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 719*4),
    
        new BackgroundObject('img/5_background/layers/air.png', 719*5),
        new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719*5), 
        new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719*5),
        new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719*5),
    
        new BackgroundObject('img/5_background/layers/air.png', 719*6),
        new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 719*6), 
        new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 719*6),
        new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 719*6),

        new BackgroundObject('img/5_background/layers/air.png', 800*7),
        new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 800*7), 
        new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 800*7),
        new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 800*7),
    ],
    [
        new Coins(500),
        new Coins(800),
        new Coins(1200),
        new Coins(2000),
        new Coins(2400),
        new Coins(2800),
        new Coins(2800),
        new Coins(3900),
        new Coins(3800)
    ],
    [
        new Bottles(300),
        new Bottles(600),
        new Bottles(800),
        new Bottles(900),
        new Bottles(1200),
        new Bottles(1500),
        new Bottles(2200),
        new Bottles(2400),
        new Bottles(3300),
        new Bottles(3500),
        new Bottles(4000)
    ]
);
}

