// Define constant colors
const C1 = '#EE4266';  // Color 1
const C2 = '#2A1E5C';  // Color 2

// Define the width of the circles to be drawn
const CIRCLE_WIDTH = 100.0;

function setup() {
  createCanvas(windowWidth, windowHeight);  // Set the size of the canvas
  background(255);          // Set the initial background color to white
  frameRate(2);             // Set the frame rate to 2
}

function draw() {
  noStroke();               // Remove the border of the shapes
  fill(randomClr());        // Set the fill color to a random color between C1 and C2
  circle(randomX(), randomY(), CIRCLE_WIDTH);  // Draw a circle at a random position with the specified width
}

// Generate a random color between C1 and C2
function randomClr() {
  // Interpolate between C1 and C2 using a random factor between 0 and 1
  return lerpColor(color(C1), color(C2), random(1));
}

// Generate a random x-coordinate within the canvas width
function randomX() {
  return random(width);
}

// Generate a random y-coordinate within the canvas height
function randomY() {
  return random(height);
}
