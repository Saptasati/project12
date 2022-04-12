var path, pathImg, boundary1, boundary2, invisiblePath;
var jaxon, jaxon_running;
var energyDrink,energyDrink1,coin, coin1,bomb,bomb1, power,power1;

function preload(){
  //pre-load images
   pathImg = loadImage("path.png")
   jaxon_running=loadAnimation("Runner-1.png","Runner-2.png")
   energyDrink1=loadImage("energyDrink.png")
   coin1=loadImage("coin.png")
   bomb1=loadImage("bomb.png")
   power1=loadImage("power.png")
}

function setup(){
  createCanvas(400,400);
  
   //create path
   path = createSprite(200,200);
   path.addImage(pathImg)
   path.scale =1.2;
   path.velocityY =4;
  
   

   //create boundaries
   boundary1 = createSprite(10,200,80,400);
   boundary2 = createSprite(390,200,80,400);

   //make boundaries invisible
   boundary1.visible = false;
   boundary2.visible = false;
   invisiblePath=createSprite(200,360)
   invisiblePath.visible=false;

  //create jaxon
  jaxon = createSprite(200,360);
  jaxon.addAnimation("running", jaxon_running)
  jaxon.scale=0.05;
 
   //create energyDrink
   energyDrink=createSprite(200,200,20,20);
   energyDrink.addImage(energyDrink1)
   energyDrink.scale=0.06
   energyDrink.velocityY=4

   //create coins
   coin=createSprite(100,100,20,20)
   coin.addImage(coin1)
   coin.scale=0.3
   coin.velocityY=4

   //create bomb
   bomb=createSprite(100,20,20,20)
   bomb.addImage(bomb1)
   bomb.scale=0.06
   bomb.velocityY=4

   power=createSprite(200,200)
   power.addImage(power1)
   power.scale=0.5
   power.visible=false;
}

function draw() {
  background(220);

  //make jaxon move by mouse pointer
  jaxon.x=World.mouseX

  //make an infinite path
  if(path.y>400)
  {
    path.y=height/2;
  }

  if(energyDrink.y>400){
    energyDrink.y=height/2
  }

  if(jaxon.isTouching(energyDrink))
  {
    energyDrink.destroy()
    power.visible=true
    path.velocityY=10
    

  }
  if(coin.y>400){
    coin.y=height/2;
  }

  if(jaxon.isTouching(coin)){
   coin.destroy()
  }

  if(bomb.y>400){
    bomb.y=height/2;
  }

  if(jaxon.isTouching(bomb)){
    textSize(50)
   stroke("red")
   text("Game Over!",120,200)
   path.velocityY=0
   coin.velocityY=0
   bomb.velocityY=0
   energyDrink.velocityY=0
   

  }

  //make jaxon collide with boundaries
  jaxon.collide(boundary1)
  jaxon.collide(boundary2)
  
  drawSprites();
 

}
