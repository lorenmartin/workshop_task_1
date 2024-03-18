let yPos1 = 0;
let yPos2 = 200;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  fill(0, 255, 0);
  noStroke();
  ellipse(width/4, yPos1, 80, 80);
  
  ellipse(width/4 * 1, yPos2, 80, 80);
  
  yPos1 = (yPos1 + 1) % height;
  yPos2 = (yPos2 - 1 + height) % height;
}
