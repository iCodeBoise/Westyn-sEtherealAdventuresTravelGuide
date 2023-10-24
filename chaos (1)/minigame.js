const DODGER = document.getElementById('dodger');
const GAME = document.getElementById('game');
const GAME_HEIGHT = 900;
const GAME_WIDTH = 1500;
const LEFT_ARROW = 37;
const RIGHT_ARROW = 39;
const DODGER_SPEED = 100;
const ROCK_SPEED = 15;
const ROCKS = [];
const START = document.getElementById('start');
var score=0;

var gameInterval = null;

function drawScore() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText("Score: "+score, 8, 20);
}
drawScore();
function checkCollision(rock) {
  const top = positionToInteger(rock.style.top);

  if (top > 910) {
    const dodgerLeftEdge = positionToInteger(DODGER.style.left);

    const dodgerRightEdge = dodgerLeftEdge + 40;

    const rockLeftEdge = positionToInteger(rock.style.left);

    const rockRightEdge = rockLeftEdge + 20;

    if ((rockLeftEdge >= dodgerLeftEdge && rockRightEdge <= dodgerRightEdge) ||
        (rockLeftEdge <= dodgerLeftEdge && rockRightEdge >= dodgerLeftEdge) ||
        (rockRightEdge >= dodgerRightEdge && rockLeftEdge <= dodgerRightEdge)){
      console.log("Game Over!");
      return true;
    }
  }
}

function createRock(x) {
  const rock = document.createElement('div');

  rock.className = 'rock';
  rock.style.left = IntegerToPosition(x);

  var top = 0, myRq;

  rock.style.top = "0px";

  GAME.append(rock);

  function moveRock() {
    if (checkCollision(rock)){
      window.cancelAnimationFrame(myRq);
      endGame();
    }
    else if (positionToInteger(rock.style.top) < GAME_HEIGHT + 20){
      let top = positionToInteger(rock.style.top);

      top += ROCK_SPEED;

      rock.style.top = IntegerToPosition(top);

      myRq = window.requestAnimationFrame(moveRock);
    }
    else{
       window.cancelAnimationFrame(myRq);
       if (rock.parentNode && rock.parentNode.id === 'game'){
        GAME.removeChild(rock);
         score++;
       }
     }
  }

  myRq = window.requestAnimationFrame(moveRock);
  ROCKS.push(rock);




  return rock;
}

function createRock2(x) {
  const rock2 = document.createElement('div');

  rock2.className = 'rock';
  rock2.style.left = IntegerToPosition(x);

  var top2 = 0, myRq2;

  rock2.style.top = "0px";

  GAME.append(rock2);

  function moveRock() {
    if (checkCollision(rock2)){
      window.cancelAnimationFrame(myRq2);
      endGame();
    }
    else if (positionToInteger(rock2.style.top) < GAME_HEIGHT + 20){
      let top2 = positionToInteger(rock2.style.top);

      top2 += ROCK_SPEED-4;

      rock2.style.top = IntegerToPosition(top2);

      myRq2 = window.requestAnimationFrame(moveRock);
    }
    else{
       window.cancelAnimationFrame(myRq2);
       if (rock2.parentNode && rock2.parentNode.id === 'game'){
        GAME.removeChild(rock2);
         score++;
       }
     }
  }

  myRq2 = window.requestAnimationFrame(moveRock);
  ROCKS.push(rock2);




  return rock2;
}

function createRock3(x) {
  const rock3 = document.createElement('div');

  rock3.className = 'rock';
  rock3.style.left = IntegerToPosition(x);

  var top3 = 0, myRq3;

  rock3.style.top = "0px";

  GAME.append(rock3);

  function moveRock() {
    if (checkCollision(rock3)){
      window.cancelAnimationFrame(myRq3);
      endGame();
    }
    else if (positionToInteger(rock3.style.top) < GAME_HEIGHT + 20){
      let top3 = positionToInteger(rock3.style.top);

      top3 += ROCK_SPEED+5;

      rock3.style.top = IntegerToPosition(top3);

      myRq3 = window.requestAnimationFrame(moveRock);
    }
    else{
       window.cancelAnimationFrame(myRq3);
       if (rock3.parentNode && rock3.parentNode.id === 'game'){
        GAME.removeChild(rock3);
         score++;
       }
     }
  }

  myRq3 = window.requestAnimationFrame(moveRock);
  ROCKS.push(rock3);




  return rock3;
}

function createRock4(x) {
  const rock4 = document.createElement('div');

  rock4.className = 'rock';
  rock4.style.left = IntegerToPosition(x);

  var top4 = 0, myRq4;

  rock4.style.top = "0px";

  GAME.append(rock4);

  function moveRock() {
    if (checkCollision(rock4)){
      window.cancelAnimationFrame(myRq4);
      endGame();
    }
    else if (positionToInteger(rock4.style.top) < GAME_HEIGHT + 20){
      let top4 = positionToInteger(rock4.style.top);

      top4 += ROCK_SPEED+3;

      rock4.style.top = IntegerToPosition(top4);

      myRq4 = window.requestAnimationFrame(moveRock);
    }
    else{
       window.cancelAnimationFrame(myRq4);
       if (rock4.parentNode && rock4.parentNode.id === 'game'){
        GAME.removeChild(rock4);
         score++;
       }
     }
  }

  myRq4 = window.requestAnimationFrame(moveRock);
  ROCKS.push(rock4);




  return rock4;
}

function createRock5(x) {
  const rock5 = document.createElement('div');

  rock5.className = 'rock';
  rock5.style.left = IntegerToPosition(x);

  var top5 = 0, myRq5;

  rock5.style.top = "0px";

  GAME.append(rock5);

  function moveRock() {
    if (checkCollision(rock5)){
      window.cancelAnimationFrame(myRq5);
      endGame();
    }
    else if (positionToInteger(rock5.style.top) < GAME_HEIGHT + 20){
      let top5 = positionToInteger(rock5.style.top);

      top5 += ROCK_SPEED-2;

      rock5.style.top = IntegerToPosition(top5);

      myRq5 = window.requestAnimationFrame(moveRock);
    }
    else{
       window.cancelAnimationFrame(myRq5);
       if (rock5.parentNode && rock5.parentNode.id === 'game'){
        GAME.removeChild(rock5);
         score++;
       }
     }
  }

  myRq5 = window.requestAnimationFrame(moveRock);
  ROCKS.push(rock5);




  return rock5; }


function endGame() {
  clearInterval(gameInterval);
  console.log(`num rocks: ${ROCKS.length}`);
  for(var i = 0; i < ROCKS.length; i++){
    ROCKS[i].remove();
  }
  window.removeEventListener('keydown', moveDodger);
  alert("Game Over!");
  window.location.reload();
}

function moveDodger(e) {
   let key = e.which;

   if (key === LEFT_ARROW){
     e.stopPropagation();
     e.preventDefault();
     moveDodgerLeft();
   }
   else if (key === RIGHT_ARROW){
     e.stopPropagation();
     e.preventDefault();
     moveDodgerRight();
   }
   else{
    return;
   }
}

function moveDodgerLeft() {
      window.requestAnimationFrame(function(){
       step(-DODGER_SPEED);
     });
}

function moveDodgerRight() {
     window.requestAnimationFrame(function(){
       step(DODGER_SPEED);
     });
}

function step(vector){    
  let left = positionToInteger(DODGER.style.left);

  //Moving right
  if (vector > 0){
    //Not touching right boundary
    if (left + 40 < GAME_WIDTH){
      left += vector;
    }
  }

  //Moving left
  else{
    //Not touching left boundary
    if (left > 0){
      left += vector;
    }
  }

  DODGER.style.left = IntegerToPosition(left);
}

//Turns integer back into proper format ('<i>px')
function IntegerToPosition(i){
  return `${i}px`;
}

/**
 * @param {string} p The position property
 * @returns {number} The position as an integer (without 'px')
 */
function positionToInteger(p) {
  return parseInt(p.split('px')[0]) || 0;
}

function start() {

  window.addEventListener('keydown', moveDodger);

  START.style.display = 'none';

  gameInterval = setInterval(function() {
    createRock(Math.floor(Math.random() *  (GAME_WIDTH - 20)));
    createRock2(Math.floor(Math.random() *  (GAME_WIDTH - 20)));
    createRock3(Math.floor(Math.random() *  (GAME_WIDTH - 20)));
    createRock4(Math.floor(Math.random() *  (GAME_WIDTH - 20)));
    createRock5(Math.floor(Math.random() *  (GAME_WIDTH - 20)));
  }, 1000);
}