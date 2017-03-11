var bubbles = [];

function setup() {
  var count = random(5, 25);
  createCanvas(windowWidth, windowHeight);

  for(var i = 0; i < count; i++){
    bubbles.push(new Bubble(random(width), random(height)));
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  //move elements with proper mapped values
}

function draw() {
  background(0);
  for(var i = 0; i < bubbles.length; i++) {
    bubbles[i].update();
    bubbles[i].draw();
    for(var j = 0; j < bubbles.length; j++) {
      if(i!=j && bubbles[i].intersects(bubbles[j])) {
        bubbles[i].randomizeColor();
        bubbles[j].randomizeColor();
      }
    }
  }
}
