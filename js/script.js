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
//console.log(getMoveName(playerInput));

function displayResult(argComputerMove, argPlayerMove){
  if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
    return 'Ty wygrywasz!';
  } else {
    printMessage('Tym razem przegrywasz :(');
  
}
  
}
let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let argComputerMove = getMoveName(randomNumber);
/*
if(randomNumber == 1){
  computerMove = 'kamień';
} else if(randomNumber == 2){
    computerMove = 'papier';
} else if(randomNumber == 3){
    computerMove = 'nożyce';
}
*/
printMessage('Mój ruch to: ' + argComputerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);


let argPlayerMove = getMoveName(playerInput);
/*
if(playerInput == '1'){
  playerMove = 'kamień';
} else if(playerInput == '2'){
    playerMove = 'papier';
} else if(playerInput == '3'){
    playerMove = 'nożyce';
}
   */


printMessage(`Twój ruch to: ${argPlayerMove}`);
/*
if(computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Ty wygrywasz!');
  } else if(computerMove == 'papier' && playerMove == 'kamień'){
    printMessage('Przegrywasz');
  } else if(computerMove == 'nożyce' && playerMove == 'kamień'){
    printMessage('Ty wygrywasz!');
  } else if(computerMove == 'kamień' && playerMove == 'nożyce'){
    printMessage('Przegrywasz');
  } else if(computerMove == 'papier' && playerMove == 'nożyce'){
    printMessage('Ty wygrywasz');
  } else if(computerMove == 'nożyce' && playerMove == 'papier'){
    printMessage('Przegrywasz');
  } else if(computerMove == 'nożyce' && playerMove == 'nożyce'){
    printMessage('Remis');
  } else if(computerMove == 'papier' && playerMove == 'papier'){
    printMessage('Remis');
  } else if(computerMove == 'kamień' && playerMove == 'kamień'){
    printMessage('Remis');
  } else if(playerMove == 'nieznany ruch'){
    printMessage('Wybierz swój ruch! 1: kamien, 2: papier, 3: nożyce.');
  }
 */