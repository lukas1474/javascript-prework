function getMoveName(argMoveId){
  if(argMoveId == 1){
    return 'kamień';
  } if(argMoveId == 2){
    return 'papier';
  } if(argMoveId == 3){
    return 'nożyce';
  } else printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
}


function displayResult(argComputerMove, argPlayerMove){
  if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
    printMessage ('Ty wygrywasz!');
  } if(argComputerMove == 'papier' && argPlayerMove == 'kamień'){
    printMessage('Przegrywasz');
  } if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
    printMessage('Ty wygrywasz!');
  } if(argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
    printMessage('Przegrywasz');
  } if(argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
    printMessage('Ty wygrywasz');
  } if(argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
    printMessage('Przegrywasz');
  } if(argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
    printMessage('Remis');
  } if(argComputerMove == 'papier' && argPlayerMove == 'papier'){
    printMessage('Remis');
  } if(argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
    printMessage('Remis');
  } if(argPlayerMove == 'nieznany ruch'){
    printMessage('Wybierz swój ruch! 1: kamien, 2: papier, 3: nożyce.'); 
  }
}

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let argComputerMove = getMoveName(randomNumber);

printMessage('Mój ruch to: ' + argComputerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let argPlayerMove = getMoveName(playerInput);

displayResult(argComputerMove, argPlayerMove);

printMessage(`Twój ruch to: ${argPlayerMove}`);
