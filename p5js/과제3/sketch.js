let faceY = 200;
let eyeSize = 25;
let mouthColorR = 220;
let shirtColorG = 130;
let isJumping = false;
let jumpSpeed = 0;
let gravity = 0.8;

let angle = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);

  let swingX = sin(angle) * 50;
  let dynamicFaceX = width/2 + swingX;
  
  let scaleMouth = map(sin(angle*2), -1, 1, 0.5, 1.5);
  let dynamicEyeSize = eyeSize + sin(frameCount * 0.1) * 8;
  
  let dynamicShirtR = map(cos(angle), -1, 1, 50, 150);

  if (mouseIsPressed) {
    shirtColorG = random(100, 200);
  } else {
    shirtColorG = 130;
  }

  if (keyIsDown(32) && !isJumping) {
    isJumping = true;
    jumpSpeed = -15;
  }

  if (isJumping) {
    faceY += jumpSpeed;
    jumpSpeed += gravity;

    if (faceY >= 200) {
      faceY = 200;
      isJumping = false;
      jumpSpeed = 0;
    }
  }

  push();
  translate(dynamicFaceX, faceY);
  noStroke();
  fill(180, 120, 80);
  ellipse(0, 0, 180, 220);

  fill(30);
  arc(0, - 60, 190, 160, PI, TWO_PI);

  fill(255);
  ellipse(-40, - 10, 40, 25);
  ellipse(40, - 10, 40, 25);

  fill(0);
  ellipse(-40, - 10, dynamicEyeSize, dynamicEyeSize);
  ellipse(40, - 10, dynamicEyeSize, dynamicEyeSize);

  stroke(0);
  strokeWeight(3);
  line(-55, - 30, -25, - 30);
  line(25, - 30, 55, - 30);

  noFill();
  arc(0, 10, 20, 20, 0, PI);

  fill(mouthColorR, 80, 80);
  noStroke();
  arc(0, 50, 60 * scaleMouth, 30 * scaleMouth, 0, PI);

  fill(180, 120, 80);
  ellipse(-90, 0, 30, 50);
  ellipse(90, 0, 30, 50);

  fill(180, 120, 80);
  rect(-15, 90, 30, 30);

  fill(dynamicShirtR, shirtColorG, 200);
  rect(-50, 110, 100, 100);
  pop();

  angle += 0.02;
}

function keyPressed() {
  if (key === 'a' || key === 'A') {
    eyeSize = 35;
    mouthColorR = 255;
  }
}

function keyReleased() {
  if (key === 'a' || key === 'A') {
    eyeSize = 10;
    mouthColorR = 220;
  }
  
  if (key === 's' || key === 'S') {
    saveGif('my_character_motion.gif', 5); 
  }
}