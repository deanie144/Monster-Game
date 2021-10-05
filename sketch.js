var bg,bgImg;
var player, shooterImg, shooter_shooting;
var bluemonster, purplemonster, greenmonster;
var theif;


function preload(){
  
  shooterImg = loadImage("assets/shooter_1.png")
  shooter_shooting = loadImage("assets/shooter_3.png")
  bluemonster = loadImage("assets/bluemonster.PNG")
  purplemonster = loadImage("assets/purple monster.png")
 zombie = loadImage("assets/zombie.png")

  bgImg = loadImage("assets/Second road.jpg")

  theif = loadImage("assets/cartoon theif.jpg")

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(0,0,width,height)
bg.addImage(bgImg)
bg.scale = 6.5;
if(bg.x > width / 2) {
  bg.x = 0;
}
bg.velocityX = -2;

//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.5
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)
  
   obstaclesGroup = new Group();
}

function draw() {
  background(0); 




  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("RIGHT_ARROW")){
  player.x = player.x+30

}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  player.addImage(shooter_shooting)
 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(shooterImg)
}
spawnObstacles();

drawSprites();

}



function spawnObstacles() { 
  if(frameCount % 60 === 0) { 
    var obstacle = createSprite(random(100,windowWidth), 700, 10,40); 
    //obstacle.debug = true; 
    obstacle.velocityX = -6
    //generate random obstacles 
    var rand = Math.round(random(1,3)); 
    switch(rand) { 
      case 1: obstacle.addImage(zombie); 
      break; 
      case 2: obstacle.addImage(purplemonster); 
      break; 
      case 3: obstacle.addImage(bluemonster); 
      break; 
       default: 
       break; 
    }
      //assign scale and lifetime to the obstacle 
      obstacle.scale = 0.2;
     obstacle.lifetime = 300; 
      //add each obstacle to the group 
      obstaclesGroup.add(obstacle); } 
    }