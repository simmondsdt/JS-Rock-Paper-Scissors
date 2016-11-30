var result = '';
var computerChoice = '';
var userChoices = document.getElementsByClassName('userChoice');
var newGames = document.getElementById('newgame');

function computer() {
  computerChoice = Math.random();
  if (computerChoice < 0.34) {
      computerChoice = "rock";
  } else if(computerChoice <= 0.67) {
      computerChoice = "paper";
  } else {
      computerChoice = "scissors";
  } console.log("Computer: " + computerChoice);
}


var compare = function(choice1, choice2) {
  if (choice1 === choice2) {
    result = "It's a tie!";
  } else if(choice1 === "rock") {
    if(choice2 === "scissors") {
      result = "user wins";
    } else {
      result = "computer wins";
    }
  } else if(choice1 === "paper") {
    if(choice2 === "rock") {
      result = "user wins";
    } else {
      result = "computer wins";
    }
  } else if(choice1 === "scissors") {
    if(choice2 === "rock") {
      result = "computer wins";
    } else {
      result = "user wins";
    }
  }
  console.log("Result: " + result)
}

for(var i = 0; i < userChoices.length; i++) {
  var select = userChoices[i];
  select.addEventListener("click", function() {
    choiced = (this.innerText);
    choice = choiced.toLowerCase();
    console.log("User: " + choice);
    compare(choice, computerChoice);
  })
}

newgame.addEventListener('click', function() {
  result = '';
  computer();
})


computer();
