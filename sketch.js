
var monkey , monkey_running,path;
var banana ,bananaImage, rock, obstacleImage;
var obstacleGroup, foodGroup;
var score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
//creating the monkey
  monkey = createSprite(80,300,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.lifetime = -1;
  monkey.scale = 0.2;

//creating the ground
path = createSprite(200,350,400,20)
path.x = path.width/2;
path.velocityX = -5;

foodGroup = new Group();
obstacleGroup = new Group();
score = 0;

}
// creating groups




function draw() {
background("brown");
  // creating the infinite space for the path
  if(path.x>0){path.x= path.width/2  }
 // make the monkey on the ground
monkey.collide(path); 
  
  // making the monkey jump and adding gravity
  if(keyDown("space"))
  { monkey.velocityY = -10; }
  monkey.velocityY = monkey.velocityY +0.9;
  
  text("Score:"+ score, 100,50);
  score = Math.ceil(frameCount/frameRate())
  
  
 
  
  
  
  spawnStone();
  spawnFood();
  drawSprites();
}
function spawnFood(){
 if (frameCount%80===0){
   banana = createSprite(200,200,20,20)
 banana.addImage("yumm",bananaImage);
 banana.lifetime = -1;
 banana.scale = 0.1;
   banana.y=Math.round(random(120,200));
 banana.velocityX = -4;
 foodGroup.add(banana,bananaImage);
 
 }  

}
 function spawnStone(){
   if(frameCount%300===0){
  rock= createSprite(200,320,20,20)   
     rock.addImage("stone",obstacleImage);
rock.velocityX = -5;
     rock.lifetime = -1;
     rock.scale = 0.1;
  obstacleGroup.add(rock,obstacleImage);
   }
 }


 



