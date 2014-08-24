// Variables
var humanChoice = ' ';

var computerChoice = Math.random();
if(computerChoice<=0.33) {
	computerChoice = "rock";
} else if(computerChoice<=0.66) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
}

//Click on Rock, Paper, Scissors

document.getElementById('rock').onclick = rock;
function rock() {
  humanChoice = "rock";
  // computerResult = computerResult + 1;
  // document.getElementById('computerScore').innerHTML = computerResult;
}

document.getElementById('paper').onclick = paper;
function paper() {
  humanChoice = "paper";
  // humanResult = humanResult + 2;
  // document.getElementById('humanScore').innerHTML = humanResult;
}

document.getElementById('scissors').onclick = scissors;
function scissors() {
  humanChoice = "scissors";
  // computerResult = computerResult + 1;
  // document.getElementById('computerScore').innerHTML = computerResult;
}

function compare(humanChoice, computerChoice) {

	var humanResult = 0;
    var computerResult = 0;

	if(humanChoice===computerChoice) {
		document.getElementById('status').innerHTML = "You tied. :|";
	} else if(humanChoice==="rock") {
		if(computerChoice==="paper") {
			computerResult = computerResult + 1;
			document.getElementById('computerScore').innerHTML = computerResult;
			document.getElementById('status').innerHTML = "You lose. :(";
		} else {
			humanResult = humanResult + 1;
			document.getElementById('humanScore').innerHTML = humanResult;
			document.getElementById('status').innerHTML = "You win. :)";
		}
	} else if(humanChoice==="paper") {
		if(computerChoice==="scissors") {
			computerResult = computerResult + 1;
			document.getElementById('computerScore').innerHTML = computerResult;
			document.getElementById('status').innerHTML = "You lose. :(";
		} else {
			humanResult = humanResult + 1;
			document.getElementById('humanScore').innerHTML = humanResult;
			document.getElementById('status').innerHTML = "You win. :)";
		}
	} else if (humanChoice==="scissors") {
		if(computerChoice==="rock") {
			computerResult = computerResult + 1;
			document.getElementById('computerScore').innerHTML = computerResult;
			document.getElementById('status').innerHTML = "You lose. :(";
		} else {
			humanResult = humanResult + 1;
			document.getElementById('humanScore').innerHTML = humanResult;
			document.getElementById('status').innerHTML = "You win. :)";
		}
	}
}

compare();


