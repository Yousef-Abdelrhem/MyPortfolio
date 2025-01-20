// Get the container element
const container = document.getElementById("fractal-tree");

// Create the canvas
const canvas = document.createElement("canvas");
canvas.width = 400;
canvas.height = 370;
container.appendChild(canvas);

// Set up the canvas context
const ctx = canvas.getContext("2d");
let angle = Math.PI / 4;

// Draw the fractal tree
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
  ctx.save();
  ctx.translate(200, canvas.height); // Move to the bottom center
  angle = map(Math.sin(Date.now() * 0.001), -1, 1, Math.PI / 2, Math.PI / 16); // Vary the angle
  branch(100);
  ctx.restore();

  requestAnimationFrame(draw); // Animate the tree
}

function branch(len) {
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(0, -len);
  ctx.strokeStyle = "white";
  ctx.stroke();
  ctx.translate(0, -len);

  if (len > 4) {
    ctx.save();
    ctx.rotate(angle);
    branch(len * 0.67);
    ctx.restore();

    ctx.save();
    ctx.rotate(-angle);
    branch(len * 0.67);
    ctx.restore();
  }
}

// Helper function to map values
function map(value, start1, stop1, start2, stop2) {
  return ((value - start1) / (stop1 - start1)) * (stop2 - start2) + start2;
}

// Start the animation
draw();
