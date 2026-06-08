let y;
let vy = 0;
let gravity = 0.8;
let isJumping = false;

function setup() {
  createCanvas(600, 400);
  y = 0; // 기본 위치 오프셋 (캐릭터 전체 이동용)
}

function draw() {
  background(220);

  // 바닥
  fill(200);
  rect(0, height - 40, width, 40);

  // 점프 물리
  if (isJumping) {
    vy += gravity;
    y += vy;

    if (y >= 0) {
      y = 0;
      vy = 0;
      isJumping = false;
    }
  }

  drawCharacter(300, 200 + y);
}

function drawCharacter(cx, cy) {
  push();
  translate(0, y); // 전체 캐릭터 이동

  // 얼굴 (조금 더 밝은 피부톤)
  fill(180, 120, 80);
  ellipse(300, 200, 180, 220);

  // 머리
  fill(30);
  arc(300, 140, 190, 160, PI, TWO_PI);

  // 눈
  fill(255);
  ellipse(260, 190, 40, 25);
  ellipse(340, 190, 40, 25);

  fill(0);
  ellipse(260, 190, 10, 10);
  ellipse(340, 190, 10, 10);

  // 눈썹
  stroke(0);
  strokeWeight(3);
  line(245, 170, 275, 170);
  line(325, 170, 355, 170);

  // 코
  noFill();
  arc(300, 210, 20, 20, 0, PI);

  // 입
  fill(220, 80, 80);
  noStroke();
  arc(300, 250, 60, 30, 0, PI);

  // 귀
  fill(180, 120, 80);
  ellipse(210, 200, 30, 50);
  ellipse(390, 200, 30, 50);

  // 목
  rect(285, 290, 30, 30);

  // 상반신
  fill(70, 130, 200);
  rect(250, 310, 100, 100);

  pop();
}

function keyPressed() {
  if (key === ' ' && !isJumping) {
    vy = -12;
    isJumping = true;
  }
}