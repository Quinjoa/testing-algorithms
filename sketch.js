var movingRectangle
var fixedRectangle



function setup() {
  createCanvas(800,400);
  movingRectangle=createSprite(400, 200, 50, 50);
  movingRectangle.shapeColor="red";
 
  
 
  fixedRectangle=createSprite(200,200,100,100);
  fixedRectangle.shapeColor="red";




}


function draw() {
 
  movingRectangle.y=mouseY; 
  movingRectangle.x=mouseX;
  
  movingRectangle.debug=true;
  fixedRectangle.debug=true;

  if(movingRectangle.x-fixedRectangle.x < movingRectangle.width/2 + fixedRectangle.width/2
    && fixedRectangle.x-movingRectangle.x < movingRectangle.width/2 + fixedRectangle.width/2
     && movingRectangle.y-fixedRectangle.y < movingRectangle.width/2 + fixedRectangle.width/2 
     && fixedRectangle.y-movingRectangle.y < movingRectangle.width/2 + fixedRectangle.width/2){
    fixedRectangle.shapeColor="cyan";
    movingRectangle.shapeColor="cyan";

  }
 else{

  movingRectangle.shapeColor="red";
  fixedRectangle.shapeColor="red";

 }



  background(0);  
  drawSprites();
}