var ballX = 0;
var ballspeed = 3;

var ballX2 = 0;
var ballspeed2 = 0.8;

var ballY3 = 0;
var ballspeed3 = 20;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  noStroke();
  background(220, 115, 10);
    fill(10, 255, random(255));
  ellipse(ballX-10, 200, 100);
  ballX = ballX + 1 * ballspeed;
  if (ballX < 0) {
    ballspeed = -ballspeed
  }
  if (ballX > width) {
    ballspeed = - ballspeed
  }

 
  


  //BALL2
  noStroke();
  fill(50,random(200),100);
  ellipse(ballX2, 200, 15);
  ballX2 = ballX2 + 1 * ballspeed2;
  if (ballX2 < 0) {
    ballspeed2 = -ballspeed2
  }
  if (ballX2 > width) {
    ballspeed2 = - ballspeed2
  }
  
  //BALL 3
  noStroke();
  fill(50,30,200);
  ellipse(ballX2, ballY3+3, 26);
  //X VAIRATION
  ballX2 = ballX2 + 1 * ballspeed2;
  if (ballX2 < 0) {
    ballspeed2 = -ballspeed2
  }
  if (ballX2 > width) {
    ballspeed2 = - ballspeed2
  }
  // Y VARIATION
  ballY3 = ballY3 + 1 * ballspeed3;
  if (ballY3 < 0) {
    ballspeed3 = -ballspeed3
  }
  if (ballY3 > width) {
    ballspeed3 = - ballspeed3
  }
  
  
 
 }
