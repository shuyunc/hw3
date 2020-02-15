var bally=0;
var ballspeed=2;
var randomy=(0,200);
function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  colorMode(HSB);
  background(20,50,100);
  ellipse(200, bally, 100);
  fill(random(255),220,50,80);
 
  bally=bally+3*ballspeed
  if(bally>height) {
    ballspeed=-ballspeed;
  }
 if(bally<0){
    ballspeed=-ballspeed;
  }
}

