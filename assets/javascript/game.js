
// var answer = "g" ;
// var guess =  ;
// var numWins = 0;
// var numLose = 0;

// for (i=0; i<26;i++){
//     guess =  ;
//     if( answer == guess){
//         alert("You win!")
//         break;
//     } else{

//     }
// }

function setup(){

//insert alphabet variables for computer to choose from
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
    'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Variables for tracking  wins, losses and ties. They begin at 0.
var wins = 0;
var losses = 0;
var guesses = 10;

var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(computerChoice)


document.onkeypress = function(event) {
    var userGuess = event.key;

    if(userGuess === computerChoice){
        wins++;
        restart();
    }else{
        guesses--;
    }

    if(guesses === 0){
        losses++;
        restart(); 
        
    }

    function restart() {
        guesses = 10;
        letterGuessed= [];
        var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
        console.log(computerChoice);
    }

    document.getElementById('wins').innerHTML = wins;
    document.getElementById('losses').innerHTML = losses;
    document.getElementById('guesses').innerHTML = guesses;

} 
};

// restarts the game

