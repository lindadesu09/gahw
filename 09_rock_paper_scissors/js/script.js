(function () {
  var humanResult = 0,
      computerResult = 0,
      choice = ['rock', 'paper', 'scissors'],
      status = document.getElementById("status"),
      humanScore = document.getElementById('humanScore'),
      computerScore = document.getElementById('computerScore'),

      updateScores = function () {
        humanScore.innerHTML = humanResult;
        computerScore.innerHTML = computerResult;
    },

      makeChoser = function (player) {
        return function () {
          var result,
              computer = Math.floor(Math.random() * 3 ),
              
              win = player - computer;

          if ( win === 0 ) {
            result = 'tied :|';
            } else {
            if ( win === -2 || win === 1 ) {
              result =  'win :)';
              humanResult++;
            } else {
              result = 'lose :(';
              computerResult++;
            }
          }

          status.innerHTML = 'You played ' + choice[player] + '. The bot played ' + choice[computer] + ' you ' + result;
          updateScores();
        };
    };

  document.getElementById('rock').onclick = makeChoser(0);
  document.getElementById('paper').onclick = makeChoser(1);
  document.getElementById('scissors').onclick = makeChoser(2);
}());