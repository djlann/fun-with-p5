function Bubble(x, y) {
  this.x = x;
  this.y = y;
  this.r = random(10, 50);
  this.col = color(255, 255, 255);

  this.update = function() {
    this.x += random(-3, 3);
    this.y += random(-3, 3);
  }

  this.draw = function() {
    fill(this.col);
    ellipse(this.x, this.y, 2*this.r, 2*this.r);
  }

  this.randomizeColor = function() {
    this.col = color(random(255), random(255), random(255));
  }

  this.intersects = function(anotherBubble) {
    var d = dist(this.x, this.y, anotherBubble.x, anotherBubble.y);
    if(d < this.r + anotherBubble.r) {
      return true;
    }
    return false;
  }
}
