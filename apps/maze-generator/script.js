var myCanvas,
  cols,
  rows,
  grid = [];

function setup() {
  myCanvas = createCanvas(400, 400);
  rows = Math.floor(width / a);
  cols = Math.floor(height / a);

  for(var i = 0; i < rows; i++) {
    for(var j = 0; j < cols; j++) {
      grid.push(new Cell(i, j));
    }
  }
}

function draw() {
  background(51);
  for(var i = 0; i < grid.length; i++) {
    grid[i].show();
  }
}
