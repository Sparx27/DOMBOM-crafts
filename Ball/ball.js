const d = document;

let x = 0, y = 0;

export default function ballMovement(e, stage, ball) {
  const $stage = d.querySelector(stage),
  $ball = d.querySelector(ball),
  limitStage = $stage.getBoundingClientRect(),
  limitBall = $ball.getBoundingClientRect();

  switch (e.key) {
    case "w":
      if(limitBall.top - 8 > limitStage.top) y--;
      break;
    case "d":
      if(limitBall.right + 5 < limitStage.right) x++;
      break;
    case "s":
      if(limitBall.bottom + 5 < limitStage.bottom) y++;
      break; 
    case "a":
      if(limitBall.left - 5 > limitStage.left) x--;
      break;
  }

  $ball.style.transform = `translate(${x*8}px, ${y*8}px)`;
}