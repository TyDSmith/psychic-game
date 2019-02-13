
function setup(){

//insert alphabet variables for computer to choose from
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
    'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

    //insert array for guesses to be pushed to
var letterGuessed=[];

// Variables for tracking  wins, losses and ties. They begin at 0.
var wins = 0;
var losses = 0;
var guesses = 10;

//make random letter selection
function random(){

return alphabet[Math.floor(Math.random() * alphabet.length)];
};

var computerChoice = random();
console.log(computerChoice)

document.onkeypress = function(event) {

    var userGuess = event.key;
    letterGuessed.push(userGuess);
    if(userGuess === computerChoice){
        wins++;
        computerChoice = random();
        restart();
    } else{ 
        guesses--;
    }

    if(guesses === 0){
        losses++;
        computerChoice = random();
        restart(); 
        
    }

    //restarts the game
    function restart() {
        guesses = 10;
        letterGuessed= [];
        random();
        console.log(computerChoice);
    }
    //adds relevent info to DOM
    document.getElementById('wins').innerHTML = wins;
    document.getElementById('losses').innerHTML = losses;
    document.getElementById('guesses').innerHTML = guesses;
    document.getElementById('guessed').innerHTML = letterGuessed;

} 
};
