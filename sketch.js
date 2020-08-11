var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(400, 775,80,30);
  movingRect.shapeColor = "green";

  movingRect.velocityY = -15;
  fixedRect.velocityY = +5;
 
  edges = createEdgeSprites();

}

function draw() {
  background(0,0,0);  

 bounceOff(movingRect,fixedRect);
  
 bounceOff(movingRect,edges[3])
 bounceOff(fixedRect,edges[2])
 
 
 
 drawSprites();
}


