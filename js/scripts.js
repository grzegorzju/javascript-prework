function getMoveName(argMoveId) {
  let argMoveId;
  if (argMoveId == 1) {
    return 'kamień';
  } else if (argMoveId == 2) {
    return 'papier';
  } else if (argMoveId == 3) {
    return 'nożyce';
  } else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
    return 'kamień';
  }
}

function displayResult(argPlayerMove, argComputerMove) {
  let argPlayerMove,argComputerMove;
  if (argPlayerMove == argComputerMove) {
	printMessage('Remis!');
  } else if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
    printMessage('Wygrywasz!');
  } else if (argPlayerMove == 'kamień' && argComputerMove == 'norzyce') {
    printMessage('Wygrywasz!');
  } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
    printMessage('Wygrywasz!');
  } else {
    printMessage('Przegrywasz :(');
  }
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
}

function randomCompReaction(){
	return Math.floor(Math.random() * 3 + 1);
}

function buttonClicked(argButtonId) {
  let argPlayerMove = getMoveName(argButtonId);
  let argComputerMove = getMoveName(randomCompReaction());
  displayResult(argPlayerMove, argComputerMove);
}

buttonRock = document.getElementById('button-rock');
buttonPaper = document.getElementById('button-paper');
buttonScissors = document.getElementById('button-scissors');
buttonRock.addEventListener('click', function(){ buttonClicked(1); });
buttonPaper.addEventListener('click', function(){ buttonClicked(2); });
buttonScissors.addEventListener('click', function(){ buttonClicked(3); });
