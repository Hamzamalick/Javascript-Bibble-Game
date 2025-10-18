let gameBottom = document.querySelector(".game-bottom");
let newScore = document.querySelector("#score");
let score = 0;
let hitVal = "";
let timer = 60;

gameBottom.addEventListener("click", function (e) {
  let scoreVal = Number(e.target.textContent);
  if (scoreVal === hitVal) {
    increaseScore();
    changeHit();
    createBubbles();
  }
});

function startTimer() {
  let realTimer = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector("#myTime").textContent = timer;
    } else {
      gameBottom.innerHTML = `<h1>Game is Over</h1>`;
      clearInterval(realTimer);
    }
  }, 1000);
}

function changeHit() {
  hitVal = Math.floor(Math.random() * 10);
  document.querySelector("#hit").innerHTML = hitVal;
}

function increaseScore() {
  score += 10;
  newScore.textContent = score;
}

function createBubbles() {
  var clutter = "";
  for (i = 1; i <= 114; i++) {
    let randomNum = Math.floor(Math.random() * 10);
    clutter += ` <div class="bubble">${randomNum}</div>`;
  }

  document.querySelector(".game-bottom").innerHTML = clutter;
}
createBubbles();
changeHit();
startTimer();
