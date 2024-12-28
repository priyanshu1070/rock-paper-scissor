const rock = document.querySelector('#rockBtn');
const paper = document.querySelector('#paperBtn');
const scissors = document.querySelector('#scissorsBtn');
const player = document.querySelector('#player-choice');
const comp = document.querySelector('#comp-choice');
const score = document.querySelector('.score');
const choices = ['Rock', 'Paper', 'Scissor'];
const images = document.getElementsByTagName("img");
let win = 0;
let lose = 0;
let tie = 0;

rock.addEventListener('click', choiceRock);
paper.addEventListener('click', choicePaper);
scissors.addEventListener('click', choiceScissor);
document.addEventListener('keydown',(event)=>{
    if (event.key==="r"){
        choiceRock();
    }
    else if (event.key==="p"){
        choicePaper();
    }
    else if (event.key==="s"){
        choiceScissor();
    }
});

function choiceRock() {
  let playerChoice = 'Rock';
  let compChoice = randomChoice();
  player.textContent = `Player : ${playerChoice}`;
  comp.textContent = `Computer : ${compChoice}`;
  if (compChoice === 'Paper') {
    lose += 1;
    score.textContent = `Win : ${win} | Tie : ${tie} | Lose : ${lose}`;
    console.log('Lose');
  } else if (compChoice === 'Rock') {
    tie += 1;
    score.textContent = `Win : ${win} | Tie : ${tie} | Lose : ${lose}`;
    console.log('Tie');
  } else {
    win += 1;
    score.textContent = `Win : ${win} | Tie : ${tie} | Lose : ${lose}`;
    console.log('Win');
  }
}
function randomChoice() {
  let choice = Math.floor(Math.random() * 3);
  return (choices[choice]);
}


function choicePaper() {
  let playerChoice = 'Paper';
  let compChoice = randomChoice();
  player.textContent = `Player : ${playerChoice}`;
  comp.textContent = `Computer : ${compChoice}`;
  if (compChoice === 'Scissor') {
    lose += 1;
    score.textContent = `Win : ${win} | Tie : ${tie} | Lose : ${lose}`;
    console.log('Lose');
  } else if (compChoice === 'Paper') {
    tie += 1;
    score.textContent = `Win : ${win} | Tie : ${tie} | Lose : ${lose}`;
    console.log('Tie');
  } else {
    win += 1;
    score.textContent = `Win : ${win} | Tie : ${tie} | Lose : ${lose}`;
    console.log('Win');
  }
}
function randomChoice() {
  let choice = Math.floor(Math.random() * 3);
  return (choices[choice]);
}

function choiceScissor() {
  let playerChoice = 'Scissor';
  let compChoice = randomChoice();
  player.textContent = `Player : ${playerChoice}`;
  comp.textContent = `Computer : ${compChoice}`;
  if (compChoice === 'Rock') {
    lose += 1;
    score.textContent = `Win : ${win} | Tie : ${tie} | Lose : ${lose}`;
    console.log('Lose');
  } else if (compChoice === 'Scissor') {
    tie += 1;
    score.textContent = `Win : ${win} | Tie : ${tie} | Lose : ${lose}`;
    console.log('Tie');
  } else {
    win += 1;
    score.textContent = `Win : ${win} | Tie : ${tie} | Lose : ${lose}`;
    console.log('Win');
  }
}
function randomChoice() {
  let choice = Math.floor(Math.random() * 3);
  return (choices[choice]);
}
