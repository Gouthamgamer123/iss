var bg,sleep, brush, gym, eat, bath, move;
var astronaut;
var bgI;
function preload(){
  bg= loadImage("images/iss.png");
  sleep=loadAnimation("images/sleep.png"); 
  brush = loadAnimation("images/brush.png");
  gym = loadAnimation("images/gym1.png","images/gym2.png");
  eat = loadAnimation("images/eat1.png","images/eat2.png");
  bath = loadAnimation("images/bath1.png","images/bath2.png");
 move = loadAnimation("images/move1.png");
}

function setup() {
  createCanvas(1000, 500);
  
  astronaut = createSprite(500,250);
  astronaut.addAnimation("sleeping", sleep);
  astronaut.scale = 0.1;
;
}

function draw() {
  background(bg);
  drawSprites();

  textSize(15);
  fill("red")
 
  textSize(15);
  text("use up arrow to brush your teeth",20, 55);
  text("use the down arrow to make yourself fit",20, 70);
  text("use the left arrow to eat your food",20, 85);
  text("use the right arrow to clean your body",20, 100);
  text("use the m word key to mave around in the iss",20, 115);
  
  edges=createEdgeSprites();
  astronaut.bounceOff(edges);
  
  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing",brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  
  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming", gym);
    astronaut.changeAnimation("gymming");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  
  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating", eat);
    astronaut.changeAnimation("eating");
    astronaut.x = 150;
    astronaut.y = 350;
    astronaut.velocityX = 0.5;
    astronaut.velocityY = 0.5;
  }
  
  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing", bath);
    astronaut.changeAnimation("bathing");
    astronaut.x = 300;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("m")){
    astronaut.addAnimation("moving", move);
    astronaut.changeAnimation("moving");
    astronaut.velocityX = -3;
    astronaut.velocityY = -2;
  }

}