var b1, b2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  b1 = new Bubble(100, 100);
  b2 = new Bubble(150, 100);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  b1.update();
  b2.update();
  if(b1.intersects(b2)) {
    b1.randomizeColor();
    b2.randomizeColor();
  }
  b1.draw();
  b2.draw();
}
