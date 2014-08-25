var choice = { 
			rock     : {value: 1, name: "rock", code: "R"}, 
			paper    : {value: 2, name: "paper", code: "P"}, 
			scissors : {value: 3, name: "scissors", code: "S"}
		};

var humanWins = 0;
var computerWins = 0;

function playGame(play) {
	var humanChoice;
	var computerChoice;

	if (play==='R') {
		humanChoice = choice.rock;
	} else if (play==='P') {
		humanChoice = choice.paper;
	} else if (play==='S') {
		humanChoice = choice.scissors;
	}

	var computer = (Math.floor( Math.random() * 3 ));
	if ( computer === 1 ) {
		computerChoice = choice.rock }
	else { if ( computer === 2 ) {
		computerChoice = choice.paper }
	else { 
		computerChoice = choice.scissors }
	}

	var result = document.getElementById('result')

	result.innerHTML ="<p>You played '" + humanChoice.name + "' and the bot played '" + computerChoice.name + "'</p>";

	var win = humanChoice.value - computerChoice.value;
	if ( win === 0 ) { 
		result.innerHTML += "<p><b>You tied. :|</b></p>" 
	} else {
			if ( win === -2 || win === 1 ) { 
				result.innerHTML += "<p><b>You win! :)</b></p>"; humanWins++; 
			} else {
					if ( win === -1 || win === 2 ) { 
						result.innerHTML += "<p><b>You lose. :(</b></p>"; computerWins++; 
					} else {}
		}
	}

	var humanScore = document.getElementById('humanScore');
	var computerScore = document.getElementById('computerScore');

	humanScore.innerHTML = humanWins;
	computerScore.innerHTML = computerWins;
}




