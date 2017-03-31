var myCanvas,
  current,
  next,
  stack = [];

function setup() {
  myCanvas = createCanvas(800, 800);
  frameRate(8);
  rows = Math.floor(width / a);
  cols = Math.floor(height / a);

  for(var i = 0; i < rows; i++) {
    for(var j = 0; j < cols; j++) {
      grid.push(new Cell(i, j));
    }
  }

  current = grid[0];
}

function draw() {
  background(50);
  current.visited = true;

  next = current.getUnvisitedNeighbor();
  if(next) {
    stack.push(current);
    removeWall(current, next);
    current = next;
  } else if (stack.length > 0) {
    current = stack.pop();
  }

  current.highlight('rgb(125, 0, 255)')

  for(var i = 0; i < grid.length; i++) {
    grid[i].show();
  }
}

function removeWall(a, b) {
  var diff = [a.i - b.i, a.j - b.j]
  if(diff[1] === 1) {
    a.walls[0] = false;
    b.walls[2] = false;
  } else if(diff[1] === -1) {
    a.walls[2] = false;
    b.walls[0] = false;
  }
  if(diff[0] === -1) {
    a.walls[1] = false;
    b.walls[3] = false;
  } else if(diff[0] === 1) {
    a.walls[3] = false;
    b.walls[1] = false;
  }

}
