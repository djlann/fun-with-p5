function Cell(i, j) {
  this.i = i;
  this.j = j;
  this.walls = [true, true, true, true];
  this.visited = false;

  var x = i * a,
    y = j * a;

  this.show = function() {
    noFill();
    stroke(255);
    if(this.walls[0]) {//top
      line(x, y, x + a, y);
    }
    if(this.walls[1]) {//right
      line(x + a, y, x + a, y + a);
    }
    if(this.walls[2]) {//bottom
      line(x, y + a, x + a, y + a);
    }
    if(this.walls[3]) {//left
      line(x, y, x, y + a);
    }

    if(this.visited) {
      noStroke();
      fill(125, 255, 100, 80);
      rect(x, y, a, a);
    }
  }

  this.index = function(arr) {
    if(arr[0] < 0 || arr[0] > rows - 1 || arr[1] < 0 || arr[1] > cols - 1) {
      return undefined;
    } else {
      return arr[1] + (arr[0] * cols);
    }
  }

  this.getUnvisitedNeighbor = function() {
    var unvisited = [],
      indexes = {
        top: [this.i, this.j-1],
        right: [this.i+1, this.j],
        bottom: [this.i, this.j+1],
        left: [this.i-1, this.j]
      },
      neighbor,
      picked;

    for(var pointer in indexes) {
      neighbor = grid[this.index(indexes[pointer])];
      if(neighbor && !neighbor.visited) {
        unvisited.push(neighbor);
      }
    }

    if(unvisited.length > 0) {
      return unvisited[Math.floor(random(unvisited.length))];
    } else {
      return undefined;
    }

  }

  this.highlight = function(col) {
    noStroke();
    fill(col);
    rect(x, y, a, a);
  }
}
