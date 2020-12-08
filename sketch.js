var rect1,rect2;
var rect3,rect4;


function setup() {
  createCanvas(800,400);
  rect1=createSprite(400, 200, 50, 50);
  rect1.shapeColor="blue";
  //obj1.velocityY=3;
  rect2=createSprite(400, 100, 50, 40);
  rect2.shapeColor="red";
  //rect2.velocityY=-3;
  rect3=createSprite(200, 100, 50, 40);
  rect3.velocityX=-3;
  rect3.shapeColor="yellow";

  rect4=createSprite(100, 100, 50, 40);
  rect4.velocityX=3;
  rect4.shapeColor="brown";
}

function draw() {
  background("green");  

  rect1.x=mouseX;
  rect1.y=mouseY;


    

if(fill_color(rect1,rect2)||fill_color(rect1,rect3)||fill_color(rect1,rect4)){
  rect2.shapeColor="yellow"; 

}else{
  rect2.shapeColor="red";
}

bounceoff(rect3,rect4);

  drawSprites();
}

