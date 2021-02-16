
var wall1, wall2,wall3,wall4,wall5;
var gameObject1, gameObject2;

function setup() {
  createCanvas(1200,800);
 
 
  wall1 = createSprite(800, 100,80,30);
  wall1.shapeColor = "green";

  wall5 = createSprite(800, 200,80,30);
  wall5.shapeColor = "green";

  wall3 = createSprite(800, 600,80,30);
  wall3.shapeColor = "green";

  wall2 = createSprite(400, 300,80,30);
  wall2.shapeColor = "green";

  wall4= createSprite(800, 400, 80, 30);
  wall4.shapeColor = "green";
  
  
}

function draw() {
  background(0,0,0);  
  wall2.x = World.mouseX;
  wall2.y = World.mouseY;

  if(isTouching(wall2,wall1)){
    wall2.shapeColor = "blue";
    wall1.shapeColor = "blue";
   
  }
  else if(isTouching(wall2,wall3)){
    wall3.shapeColor = "blue";
    wall2.shapeColor = "blue";
    
    

  }
  else if(isTouching(wall2,wall4)){
    wall4.shapeColor = "blue";
    wall2.shapeColor = "blue";
    
    

  }
  else if(isTouching(wall2,wall5)){
    wall5.shapeColor = "blue";
    wall2.shapeColor = "blue";
    
    

  }
  
  else {
    wall2.shapeColor = "green";
    wall3.shapeColor="green";
    wall4.shapeColor="green";
    wall5.shapeColor="green";
  
    wall1.shapeColor = "green"
  }
 


 

//bounceOff(movingRect,fixedRect)
  drawSprites();
}




