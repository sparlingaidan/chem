
elements = new Array();
var numClicked = 0;
reactants = new Array();


function setup() {
  createCanvas(600, 600);

  // Create a dropdown and place it beneath the canvas.
  drop1 = createSelect();
  drop1.position(100, 300);

  // Add color options.
  drop1.option('O');
  drop1.option('C');
  drop1.option('H');
  drop1.option('F');

  // Set the selected option to "red".
  drop1.selected('C');

  describe('A red square with a dropdown menu');

  // Create a dropdown and place it beneath the canvas.
  drop2 = createSelect();
  drop2.position(200, 300);

  // Add color options.
  drop2.option('O');
  drop2.option('C');
  drop2.option('H');
  drop2.option('F');

  // Set the selected option to "red".
  drop2.selected('C');

  describe('A red square with a dropdown menu');

}



function draw() {
  background(220);
  text.
}
