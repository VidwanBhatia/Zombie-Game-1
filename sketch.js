var bg,bgImg;
var player, shooterImg, shooter_shooting, shooter_Img;
var Zombie;
var Heart1,Heart2,Heart3;


function preload(){
  
  shooter1Img= loadImage("assets/shooter_1.png")
  shooter2Img = loadImage("assets/shooter_2.png")
  shooter3Img = loadImage("assets/shooter_3.png")
  zombieImg = loadImage("assets/zombie.png")
  heartImg = loadImage("assets/heart_1.png")
  heart1Img = loadImage("assets/heart_2.png")
  heart2Img = loadImage("assets/heart_3.png")
  bgImg = loadImage("assets/bg.jpeg")

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
  

//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooter1Img)
   player.scale = 0.3


Zombie = createSprite(displayWidth-500, displayHeight-300, 50, 50);
 Zombie.addImage(zombieImg)
   Zombie.scale=0.3

   heart1 = createSprite(displayWidth-1159, displayHeight-400,50,50)
   heart1.addImage(heartImg)
   heart1.scale=0.1

   heart2 = createSprite(displayWidth-1155, displayHeight-400,50,50)
   heart2.addImage(heart1Img)
   heart2.scale=0.1

   heart3 = createSprite(displayWidth-1109, displayHeight-400,50,50)
   heart3.addImage(heart2Img)
   heart3.scale=0.1

 
     // player.debug = true
  //  player.debug = false
    // player.Debug =false
    // Player.debug = true

   //player.Collider("rectagle",0,0,300,300)
   //player.setcollider("rectangle",0,0)
    player.setCollider("rectangle",0,0,300,300)
  // player.Setcollider("rectangle",0,0,300,300)

}

function draw() {
  background(0); 




  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  player.addImage(shooter3Img)
 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyDown("space")){
  //player.addImage( shooter_shooting )
 // player.addImage()
  //player.addImage(shooterImg)
 player.addImage(shooter3Img)

}

drawSprites();

}
