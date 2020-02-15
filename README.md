# hw3
What code draws the blades of grass?
 stroke(random(60, 70), 100, 90);
  line(x, height-10, x+random(-10, 10), height-10-random(h));
  noStroke();

What code makes the "lawnmower" come by? How often does it come by?
if (random(1000) > 999) {
    fill(255);
    rect(0, 0, width, height-15);
    h = 10;
  }
Every time the number reaches 1000. 1/1000 

What's the point of the h variable?
it is the length of the grass

What does the -10 do in the second and fourth arguments of the line function, height-10-random(h)? Why is it there?
it is the length of the soil.it is the starting point of the grass.
