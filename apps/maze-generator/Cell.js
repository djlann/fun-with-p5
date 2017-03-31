function Cell(i, j) {
  this.i = i;
  this.j = j;
  this.walls = [true, true, true, true];
  var x = i * a,
    y = j * a;

  this.show = function() {
    noFill();
    stroke(255);
    if(this.walls[0]) {
      line(x, y, x + a, y);
    }
    if(this.walls[1]) {
      line(x + a, y, x + a, y + a);
    }
    if(this.walls[2]) {
      line(x + a, y + a, x, y + a);
    }
    if(this.walls[3]) {
      line(x, y + a, x, y);
    }
  }
}
