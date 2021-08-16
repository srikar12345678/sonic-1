var mario;
function preload(){
  ground1=loadImage("ground 2.png");
  background1=loadImage("background.png");
  mario1=loadAnimation("mario1.png","mario2.png","mario3.png","mario4.png","mario5.png");
  
}

function setup() {
  createCanvas(1200,500);
  mario=createSprite(50, 460, 50, 50);
mario.shapeColor="blue";
mario.addAnimation("running",mario1);
  ground=createSprite(680,490,60,20);
  // ground.x=340;
  ground.velocityX=-5;
  ground.addImage(ground1);
  
  

}


function draw() {
  background(background1);  
  if(ground.x<550){
ground.x=ground.width/2;
  }
  if(keyDown("SPACE")){
    mario.velocityY=-13;
   
  }
  mario.velocityY+=0.8;
  mario.collide(ground) ;
  

  
  drawSprites();
 

}
