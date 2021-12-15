// getting user choice
const getUserChoice = userInput => {

  userInput = userInput.toLowerCase();

  if(userInput === 'rock' || userInput ==='paper' || userInput ==='scissors' || userInput === 'bomb'){
return userInput;
}
else{
  console.log('Please enter rock, paper or a scissors, Thanks!');
}
}
// getting computer choice

const getComputerChoice = ()=> {
  const randomNumber = Math.floor(Math.random() * 3);

    switch (randomNumber) {
      case 0:
      return 'rock';
      case 1:
      return 'paper';
      case 2:
      return 'scissors';
}
};

// determine winner
const determineWinner = (userChoice, computerChoice) =>{
  
  if(userChoice === computerChoice){
    return 'It is a tie!';
  }
  if(userChoice === 'rock'){
     if (computerChoice === 'paper'){
      return 'The Computer won!!!';
    }
    else{
      return 'The Human won!!!';
    }
  }
  if(userChoice === 'paper'){
     if (computerChoice === 'scissors'){
      return 'The Computer won!!!';
    }
    else{
      return 'The Human won!!!';
    }
  }
  if(userChoice === 'scissors'){
     if (computerChoice === 'rock'){
      return 'The Computer won!!!';
    }
    else{
      return 'The Human won!!!';
    }
  }
   if(userChoice === 'bomb'){
    return 'Congratulations, you Won';
  }
}
const playGame = () =>{
  const userChoice = getUserChoice('rock', 'paper', 'scissors', 'bomb');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw:' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};
playGame();
