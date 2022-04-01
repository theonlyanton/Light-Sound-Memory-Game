

const clueHoldTime = 1000;
const cluePauseTime = 333; 
const nextClueWaitTime = 1000;

var pattern = [2, 2, 4, 3, 2, 1, 2, 4];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; 
var guessCounter = 0;

var reset = false;
var count = 20;
let timer = null;

var currentScore = 0;
var highScore = 0;

var mistakes = 0;

function startGame(){
    progress = 0;
    currentScore = 0;
    gamePlaying = true;
    currentScore = 0;
    document.getElementById("startBtn").classList.add("hidden");
    document.getElementById("stopBtn").classList.remove("hidden");
    generatePattern();
    playClueSequence()
}

function generatePattern() {
  for (let j = 0; j < 8; j++) {
    pattern[j] = Math.ceil(Math.random() * 6);
  }
}

function stopGame(){
    gamePlaying = false;
    document.getElementById("startBtn").classList.remove("hidden");
    document.getElementById("stopBtn").classList.add("hidden");
    if (currentScore > highScore) {
      highScore = currentScore;
      updateParagraph();
    }
    reset = true;
}


const freqMap = {
  1: 261.63, 
  2: 293.66, 
  3: 329.63, 
  4: 349.23, 
  5: 392, 
  6: 440 
}

function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}

function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}

function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)
updateParagraph();

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; 
  for(let i=0;i<=progress;i++){ 
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) 
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
  count = 20;
  reset = false;
  clearInterval(timer);
  timer = setInterval(countDown, 1000);
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("Game Over. You won.");
}

function guess(btn){
  console.log("user guessed: " + btn);
  
  if(!gamePlaying){
    return;
  }
  
  if(pattern[guessCounter] == btn){
    if(guessCounter == progress){
      
      if(progress == pattern.length - 1){
        winGame();
        reset = true;
      }else{
        progress++;
        currentScore = progress;
        updateParagraph();
        playClueSequence();
      }
    }else{
      guessCounter++;
    }
  }else{
    loseGame();
  }
}    

function countDown() {
    // Update the count down every 1 second
    document.getElementById("clock").innerHTML =
      "Time Remaining: " + count + " s";
    count -= 1; 
    if (count < 0 || reset) {
      if(!reset) {
        stopGame(); 
        alert("Time is up. You lost.");
      }
      resetTimer();
      clearInterval(timer);
    }
}

function resetTimer(){
  count = 20;
  document.getElementById("clock").innerHTML = "Time Remaining:  0s";
}

function updateParagraph() {
    document.getElementById("currentscore").innerHTML = "Current Score: " + currentScore;
    document.getElementById("highscore").innerHTML = "High Score: " + highScore;
}

function resetHighscore() {
  highScore = 0;
  document.getElementById("highscore").innerHTML = "High Score: " + highScore;
}

