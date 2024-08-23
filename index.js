var randomNumber1 = Math.floor(Math.random() * 6) + 1; 
var randomDiceImage = "dice" + randomNumber1 + ".png"; 
var randomImageSource1 = "images/" + randomDiceImage; 
document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1; 
var randomDiceImage = "dice" + randomNumber2 + ".png"; 
var randomImageSource2 = "images/" + randomDiceImage; 
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

/* 
if (randomNumber1 % 2 === 1) {
    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML= ( "Player-1 Wins!");
    }
     else if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").innerHTML= ( "Player-2 Wins!");
    } 
    else {
        document.querySelector("h1").innerHTML= 'Draw!';
    }
} else if (randomNumber2 % 2 === 0 ) {
    if (randomNumber2 > randomNumber1) {
        document.querySelector("h1").innerHTML= ( "Player-2 Wins!");
    } 
    else if (randomNumber2 < randomNumber1) {
        document.querySelector("h1").innerHTML= ( "Player-1 Wins!");
    }
     else {
        document.querySelector("h1").innerHTML = ' Draw!';
    }
} else {
    document.querySelector("h1").innerHTML= 'Invalid!';
}

*/
if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw!";
}
else if (randomNumber1 % 2 === 1 && (randomNumber1 > randomNumber2)) {
   
        document.querySelector("h1").innerHTML= ( "Player-1 Wins!");
    }
else if (randomNumber2 % 2 === 0 && (randomNumber2 > randomNumber1)) {

    document.querySelector("h1").innerHTML= ( "Player-2 Wins!");
    }
else {
        document.querySelector("h1").innerHTML= 'Invalid!';
    }