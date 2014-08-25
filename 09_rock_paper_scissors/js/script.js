var choice = { 
			rock     : {value: 1, name: "rock", code: "R"}, 
			paper    : {value: 2, name: "paper", code: "P"}, 
			scissors : {value: 3, name: "scissors", code: "S"}
		};

var humanWins = 0;
var compWins = 0;

function playGame(play) {
	var humanChoice;
	var compChoice;

	if (play==='R') {
		humanChoice = choice.rock;
	} else if (play==='P') {
		humanChoice = choice.paper;
	} else if (play==='S') {
		humanChoice = choice.scissors;
	}

	var computer = (Math.floor( Math.random() * 3 ));
	if ( computer === 1 ) {
		compChoice = choice.rock }
	else { if ( computer === 2 ) {
		compChoice = choice.paper }
	else { 
		compChoice = choice.scissors }
	}

	var result = document.getElementById('result')

	result.innerHTML ="<p>You played '" + humanChoice.name + "' and the bot played '" + compChoice.name + "'</p>";

	var win = humanChoice.value - compChoice.value;
	if ( win === 0 ) { 
		result.innerHTML += "<p><b>You tied. :|</b></p>" 
	} else {
			if ( win === -2 || win === 1 ) { 
				result.innerHTML += "<p><b>You win! :)</b></p>"; humanWins++; 
			} else {
					if ( win === -1 || win === 2 ) { 
						result.innerHTML += "<p><b>You lose. :(</b></p>"; compWins++; 
					} else {}
		}
	}

	var humanScore = document.getElementById('humanScore');
	var compScore = document.getElementById('compScore');

	humanScore.innerHTML = humanWins;
	compScore.innerHTML = compWins;
}




