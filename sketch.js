var fixedRect , movingRect


function setup() {
  createCanvas(400,400);
  fixedRect = createSprite(200,200,50,50)
  fixedRect.shapeColor = "red"
  movingRect = createSprite(200,200,50,50)
  movingRect.shapeColor = "red"
}

function draw() {
  background("black");  
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  console.log(fixedRect.x-movingRect.x);
  isTouching()
  drawSprites();
}
function isTouching()
{
  if(movingRect.x-fixedRect.x <= 50 && fixedRect.x-movingRect.x <=50)
  {
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green"
  }
  else{
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red"
  }
}
