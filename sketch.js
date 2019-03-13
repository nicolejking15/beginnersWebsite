
function setup() {
  createCanvas(windowWidth, 1750)
}

function draw() {  
  //ellipse motion variables
  var ellipseWidth = 100
  var ellipseHeight = 100

  //motion of ellipses
  if(frameCount < 500) {
  ellipseWidth = ellipseWidth + frameCount;
  ellipseHeight = ellipseHeight + frameCount;
  }

  if(frameCount > 500) {
    ellipseWidth = 600;
    ellipseHeight = 600;
  }

  var string = 'About';
  //color of entire background
  background(0);

  //ellipse properties
  fill(255, 28, 178);
  noStroke();
  ellipse(400, 400, ellipseWidth, ellipseHeight );

  fill(255, 28, 178);
  noStroke();
  ellipse(1100, 400, ellipseWidth, ellipseHeight );

  fill(255, 28, 178);
  noStroke();
  ellipse(400, 1100, ellipseWidth, ellipseHeight );

  fill(255, 28, 178);
  noStroke();
  ellipse(1100, 1100, ellipseWidth, ellipseHeight );
}
