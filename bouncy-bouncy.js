var ballx = 0
var bally = 0
var ballspeed = 3

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  ellipse(ballx, 60, 20);
  ballx = ballx + ballspeed;
  if (ballx > width) {
    ballspeed = -ballspeed
  };
  if (ballx < 0) {
    ballspeed = -ballspeed
  };

  ellipse(100, bally, 50);
  bally = bally + ballspeed;
  if (bally > height) {
    ballspeed = -ballspeed
  };
  if (bally < 0) {
    ballspeed = -ballspeed
  };




}
