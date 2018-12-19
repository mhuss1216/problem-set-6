/*
 * Hello. 2 points.
 *
 * Write a function that draws "Hello, World!" on the canvas. You should
 * begin drawing at [10, 50], relative to the canvas, and your text should
 * be a 48px sans-serif font. Make sure the canvas is clear before drawing!
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Hello" button, your output should match that of the example.
 */

function sayHello() {
  let canvas = document.getElementById('canvas1');
  let context = canvas.getContext('2d');
  context.font = '48px sans-serif';
  context.strokeText('Hello, World!', 10, 50);
}

/*
 * Rectangle. 3 points.
 *
 * Write a function that draws a rectangle on the canvas. You should prompt
 * the user for the height and width. You should also prompt the user for the
 * X- and Y-coordinates of the topleft corner of the rectangle.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Rectangle" button, your output should match that of the example.
 *
 * Certain values, such as heights and widths that are logically too small or
 * practically too large, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 * Here is a list of prohibited values:
 *     - Width values less than 1
 *     - Height values less than 1
 *     - X- or Y- coordinates less than 5
 *     - Combinations of heights/widths and X-/Y-coordinates that would make
 *       it impossible to draw the rectangle within the bounds of the canvas
 */

function drawRectangle() {
  let canvas = document.getElementById('canvas2')
  let context = canvas.getContext('2d')
  while(true){
    var width = Number(prompt("Width:"))
    var height = Number(prompt("Height:"))
    var x = Number(prompt("X:"))
    var y = Number(prompt("X:"))
    if(width>=1 && height>=1 && x>=5 && y>=5 && canvas.width-x-width>=0 && canvas.height-y-height>=0)
    {break;}
  }
  context.strokeRect(x, y, width, height)
}

/*
 * Color. 3 points.
 *
 * Write a function that draws a rectangle on the canvas. By default, the
 * rectangle will have a height and width of 50px and 100px, respectively. It
 * will be positioned at [10, 10] on the canvas. You'll need to prompt the
 * user to enter a color for the rectangle.
 *
 * Support the following colors:
 *     - black
 *     - blue
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Color" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

function drawColoredRectangle() {
  let canvas = document.getElementById('canvas3');
  let context = canvas.getContext('2d');
  context.clearRect(0, 0, canvas.width, canvas.height);

  let color;
  while(true){
    color = prompt("Color:")
    if(color=="red" || color=="green" || color=="blue" || color=="black" || color=="orange" || color=="purple" || color=="yellow"){
      break;
    }
  }
  console.log(color);
  context.fillStyle = color;
  context.fillRect(10, 10, 100, 50);
}

/*
 * Triangle. 5 points.
 *
 * Write a function that draws a right triangle on the canvas. The triangle
 * should be outlined only, not filled. You'll need to prompt the user for the
 * lengths of each of the sides. By default, position your triangle so that
 * its leftmost and topmost points have X- and Y-coordinates of 10.
 *
 * When drawing your right triangles, the left side shall be designated as the
 * first side and will be smallest of the three side lengths. The bottom side
 * shall be designated as the second side and will be second smallest of the
 * three side lengths. The hypotenuse shall be designated as the third side
 * and will be the largest of the three side lengths.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Triangle" button, your output should match that of the example.
 *
 * Certain values, such as side lengths that make it impossible to create a
 * valid right triangle, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 * Here is a list of prohibited values:
 *     - Combinations of side lengths that would make it impossible to draw
 *       a valid triangle
 *     - Combinations of side lengths that would make it impossible to draw
 *       the triangle within the bounds of the canvas
 */

function drawTriangle() {
  let canvas = document.getElementById('canvas4');
  let context = canvas.getContext('2d');
  context.clearRect(0, 0, canvas.width, canvas.height);

  let x=10;
  let y=10;
  let a;
  let b;
  let c;

  while(true){
    a = Number(prompt('Side 1:'));
    b = Number(prompt('Side 2'));
    c = Number(prompt('Side 3'));
    if(((a**2) + (b**2) == (c**2)) && a>0 && b>0 && c>0 && canvas.width-x-a>=0 && canvas.width-y-b>=0)
    {break;}

      else {
      alert("That is not a valid right triangle.");
    }
    }
      context.beginPath();
      context.moveTo(x,y);
      context.lineTo(x,y+a);
      context.stroke();

      context.beginPath();
      context.moveTo(x,y+a);
      context.lineTo(x+b,y+a);
      context.stroke();

      context.beginPath();
      context.moveTo(x,y);
      context.lineTo(x+b,y+a);
      context.stroke();
  }
/*
 * Smile. 7 points.
 *
 * Write a function that draws a smiley face on the canvas. The head should
 * be a perfect circle with a radius specified by the user. The eyes should
 * also be perfect circles with radii that are 10% of that of the head. The
 * radius of the mouth should be 70% of that of the head. A nose is not
 * required, and the position of the eyes and mouth are up to you (provided)
 * they are on the face.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Smile" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawSmileyFace() {
  const canvas = document.getElementById('canvas5');
  const context = canvas.getContext('2d');
  let radius = Number(prompt("What would you like the radius of the Smiley Face to be?"));
  context.clearRect(0, 0, canvas.width, canvas.height);
    while(true){
      if(radius >= 1 && radius<=canvas.width && Number.isInteger(radius))
        {break;}
    }

let x = canvas.width;
let y = canvas.height;
let mouthR = (radius*.7);
let eyeR = (radius*.1);


    context.beginPath();
    context.arc(radius + 10, radius + 10, radius, 0, Math.PI*2);
    context.stroke();

    context.beginPath();
    context.arc(radius + 10 + radius/3, radius + 10 - radius/4, eyeR, 0, Math.PI*2);
    context.stroke();

    context.beginPath();
    context.arc(radius + 10 - radius/3, radius + 10 - radius/4, eyeR, 0, Math.PI*2);
    context.stroke();

    context.beginPath();
    context.arc(radius + 10, radius + 10, mouthR, 0, Math.PI);
    context.stroke();
    context.closePath();

}

/*
 * Star. 9 points.
 *
 * Write a function that draws a five-point star on the canvas. Prompt the
 * user for the outer radius (i.e., a circle that would connect each of the
 * star's outer points) and inner radius (i.e., a circle that would connect
 * each of the star's inner points). The center of the star should be placed
 * at [125, 125].
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Star" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawStar() {
  let canvas = document.getElementById('canvas6');
  let context = canvas.getContext('2d');
  context.clearRect(0, 0, canvas.width, canvas.height);
  let outerRadius=Number(prompt("Outer Radius"));
  let innerRadius=Number(prompt("Inner Radius"));
if (outerRadius>=innerRadius && canvas.width>=outerRadius+125 && canvas.height>=outerRadius+125 && innerRadius>=1 && outerRadius>=1){
  let points = 5;
  let oX = [];
  let oY = [];
  let iX = [];
  let iY = [];
  for(let i=0;i<points;i++){
    oX.push(Math.cos((Math.PI * 2 * i)/points - (Math.PI/2)) * outerRadius + 125);
    oY.push(Math.sin((Math.PI * 2 * i)/points - (Math.PI/2)) * outerRadius + 125);
    iX.push(Math.cos(((Math.PI * 2 * i)/points) - (Math.PI/2) + (Math.PI/points)) * innerRadius + 125);
    iY.push(Math.sin(((Math.PI * 2 * i)/points) - (Math.PI/2) + (Math.PI/points)) * innerRadius + 125);
  }
  context.beginPath();
  context.moveTo(oX[0], oY[0]);
  for(let j=0;j<oX.length;j++){
    context.lineTo(iX[j], iY[j]);
    context.lineTo(oX[j+1], oY[j+1]);
  }
  context.lineTo(oX[0], oY[0]);
  context.stroke();
  context.closePath();
}
else{
  alert('Your Radius is Invalid');
}

}

/*
 * Stop Sign. 7 points.
 *
 * Write a function that draws a stop sign. The stop sign should be outlined
 * in black, but filled red. At the center of the stop sign, the same height
 * as the length of the sides, should be the word STOP (all capitals, white).
 * Each side length should be 80px.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Stop Sign" button, your output should match that of the example.
 *
 * The leftmost and topmost sides should have X- and Y-coordinates of 10.
 */

function drawStopSign() {
  let canvas = document.getElementById('canvas7');
  let context = canvas.getContext('2d');
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "red";
  context.beginPath();
  context.moveTo(66, 10);
  context.lineTo(146, 10);
  context.lineTo(202, 66);
  context.lineTo(202, 144);
  context.lineTo(146, 202);
  context.lineTo(66, 202);
  context.lineTo(10, 146);
  context.lineTo(10, 66);
  context.closePath();
  context.fill();
  context.stroke();
  context.lineWidth = 1;
  context.font = "65px Arial";
  context.fillStyle = "white";
  context.fillText("STOP", 18, 130);
}

/*
 * Pyramid. 7 points.
 *
 * Write a function that draws a block pyramid, where the user specifies the
 * side length of each block. By default, we'll draw a pyramid with a base
 * of five blocks. Give the leftmost point of the pyramid an X-coordinates of
 * 10. Give the bottom of the pyramid a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Pyramid" button, your output should match that of the example.
 *
 * Certain values, such as lengths that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawPyramid() {
  let canvas = document.getElementById('canvas8');
  let context = canvas.getContext('2d');
  context.clearRect(0, 0, canvas.width, canvas.height);
  let sideLength = Number(prompt("Length:"));
  let x = 10;
  let y = canvas.height - 10;
  let i = 0;
  lineNumber = 1;
  while(i < 5){
    for(let j = 0 + lineNumber;j <= 5;j++){
      context.strokeRect(x,y-sideLength,sideLength,sideLength);
      x+= sideLength;}
      x = 10 + (sideLength/2) * lineNumber;
      y-= sideLength;
      lineNumber++;
      i++;
}
}

/*
 * House. 7 points.
 *
 * Write a function that draws a two-story house. The house should have a
 * rectangular frame, a front door, two square windows on the first floor,
 * two square windows on the second floor, and a triangular roof. Your house
 * and front door should be painted a solid color of the user's choice (these
 * colors should be different). The windows should be light blue, and the roof
 * should be gray. Give the leftmost point of your house an X-coordinate of
 * 150, and the bottom of your house a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * Support the following front door and/or house colors:
 *     - blue
 *     - brown
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "House" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

function drawHouse() {
  let canvas = document.getElementById('canvas9');
  let context = canvas.getContext('2d');
  context.clearRect(0, 0, canvas.width, canvas.height);

  while(true){
    doorColor=prompt("Enter a color for the Door");
    houseColor=prompt("Enter a color for the House");
  if((doorColor == "brown" || doorColor == "blue" || doorColor == "green" || doorColor == "orange" || doorColor == "purple" || doorColor == "red" || doorColor == "yellow")
    && (houseColor == "brown" || houseColor == "blue" || houseColor == "green" || houseColor == "orange" || houseColor == "purple" || houseColor == "red" || houseColor == "yellow"))
    {break;}
  else{
   alert("One or more of your colors is not supported.")}
}
  let x = 150;
  let lengthHouse = 576;
  let heightHouse = 400;
  let y=canvas.height - (heightHouse - 10);

    context.beginPath();
    context.fillStyle = houseColor;
    context.fillRect(x,y,lengthHouse,heightHouse);
    context.lineWidth = 1;
    context.stroke();

    context.fillStyle = doorColor;
    context.fillRect(x+(lengthHouse/2)-30,y+300,60,100);
    context.strokeRect(x+(lengthHouse/2)-30,y+300,60,100);
    context.stroke();

    context.fillStyle="gray";
    context.moveTo(x,y);
    context.lineTo(x+286,150);
    context.lineTo(x+lengthHouse,y);
    context.lineTo(x,y);
    context.fill();
    context.lineWidth = 1;
    context.stroke();

    context.fillStyle="#ADD8E6";
    context.fillRect(225, y + 75, 75, 75);
    context.fillRect(600, y + 75, 75, 75);
    context.fillRect(225, y + 250, 75, 75);
    context.fillRect(600, y + 250, 75, 75);
    context.closePath();
    context.lineWidth = 1;
    context.stroke();

    context.beginPath();
    context.fillStyle='yellow';
    context.arc(450, 700, 6, 0, Math.PI*2);
    context.fill();
    context.closePath()
    context.lineWidth = 1;
    context.stroke();
}
