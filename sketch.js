var canvas;
var music;
var box21,box2,box3,box4,box5,edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(1100,700);
    edges = createEdgeSprites();

    box1 = createSprite(135,690,250,30);
    box1.shapeColor = "pink";

    box2 = createSprite(410,690,250,30);
    box2.shapeColor = "blue";

    box3 = createSprite(685,690,250,30);
    box3.shapeColor = "purple";

    box4 = createSprite(960,690,250,30);
    box4.shapeColor = "red";

    box5 = createSprite(550,100,50,50);
    box5.shapeColor = "white";
    box5.velocityX = -7;
    box5.velocityY = -7;
}

function draw() {
    background("black");
    
     music.loop();

    if(box1.isTouching(box5) && box5.bounceOff(box1)){
        box5.shapeColor = "pink"; 
        box5.velocityX = 0;
        box5.velocityX = -7;
        box5.velocityX = -7;
        
    }

    if(box2.isTouching(box5) && box5.bounceOff(box2)){
        box5.shapeColor = "blue";
        box5.velocityX = 0;
        box5.velocityX = -7;
        box5.velocityX = -7;
    
    }

    if(box3.isTouching(box5) && box5.bounceOff(box3)){
        box5.shapeColor = "purple"; 
        box5.velocityX = 0;
        box5.velocityX = -7;
        box5.velocityX = -7;
    
    }

    if(box4.isTouching(box5) && box5.bounceOff(box4)){
        box5.shapeColor = "red";
        box5.velocityX = 0;
        box5.velocityY = 0;
        music.stop(); 
    }

    box5.bounceOff(edges);

    drawSprites();

    
}


