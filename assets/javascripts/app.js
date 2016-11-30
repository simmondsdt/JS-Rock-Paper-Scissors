var wins = 0;
var ties = 0;
var losses = 0;
var clicked = 0;
var result = '';
var computerChoice = '';
var userChoices = document.getElementsByClassName('userChoice');
var newGames = document.getElementById('newgame');
var show1 = document.getElementById('show-choice')
var show2 = document.getElementById('show-win')
var show3 = document.getElementById('show-comp')
var win = document.getElementById('win')
var lose = document.getElementById('lose')
var tie = document.getElementById('tie')


function computer() {
  computerChoice = Math.random();
  if (computerChoice < 0.34) {
      computerChoice = "rock";
  } else if(computerChoice <= 0.67) {
      computerChoice = "paper";
  } else {
      computerChoice = "scissors";
  }
}


var compare = function(choice1, choice2) {
  if (choice1 === choice2) {
    result = "It's a tie!";
    ++ties
  } else if(choice1 === "rock") {
    if(choice2 === "scissors") {
      result = "user wins";
      ++wins
    } else {
      result = "computer wins";
      ++losses
    }
  } else if(choice1 === "paper") {
    if(choice2 === "rock") {
      result = "user wins";
      ++wins
    } else {
      result = "computer wins";
      ++losses
    }
  } else if(choice1 === "scissors") {
    if(choice2 === "rock") {
      result = "computer wins";
      ++losses
    } else {
      result = "user wins";
      ++wins
    }
  }
  showComp("Computer:  " + computerChoice);
  showWin(result);
  showStats();
}


for(var i = 0; i < userChoices.length; i++) {
  var select = userChoices[i];
  select.addEventListener("click", function() {
    if (clicked < 1) {
      choiced = (this.innerText);
      choice = choiced.toLowerCase();
      showUser("User:  " + choice)
      compare(choice, computerChoice);
      ++clicked
    } else {
      var r = confirm("You are starting a new game!\n\nTo stop seeing this, you can press 'New Game' after you see who won!")
      if (r == true) {
        showUser('User: ');
        showComp('Computer: ');
        showWin('Result: ');
        result = '';
        clicked = 0;
        computer();
      } else {
        computer();
      }
    }
  })
}

function showStats(val) {
  win.innerHTML = "Wins: " + wins;
  lose.innerHTML = "Losses: " + losses;
  tie.innerHTML = "Ties: " + ties;
}

newgame.addEventListener('click', function() {
  showUser('User: ');
  showComp('Computer: ');
  showWin('Result: ');
  result = '';
  clicked = 0;
  computer();
})

function showUser(val) {
  show1.innerHTML = toTitleCase(val);
}

function showWin(val) {
  show2.innerHTML = toTitleCase(val);
}

function showComp(computerChoice) {
  show3.innerHTML = toTitleCase(computerChoice);
}

function toTitleCase(str) {
  return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}
  // var pwins = percentWin()
  // var plosses = percentLoss()
  // userWins.innerHTML = "Wins: " + wins + " --- " + pwins + "%";
  // userLosses.innerHTML = "Losses: " + losses + " --- " + plosses + "%";
  // userTies.innerHTML = "Ties: " + ties;

computer();
