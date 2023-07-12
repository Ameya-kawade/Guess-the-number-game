let isEntered = false;
let number_found = false;
let tries = 0;
let number = 0;
let answerEl = document.getElementById("answer");
let statusEL = document.getElementById("status");
let hintEl = document.getElementById("hint-section");
let reset = document.getElementById("reset");

function startGame(){
    if(!isEntered && !number_found){
        isEntered = true;
        statusEL.textContent = "Game has started guess the number between the range 1 to 100";
        number = Math.floor(Math.random()*100 + 1);
        console.log(number)
    }
}

function checkNumber(){
    if(!number_found && isEntered && answerEl.value != ""){
        if( Number(answerEl.value) === number){
            tries++;
            statusEL.textContent = "Congratulations 🥳🥳🥳 !!You found the number in "+ tries +" try.To play the game again click the 'Generate new number button'.";
            hintEl.textContent = "";
            number_found = true;
            isEntered = false;
            // answerEl.reset();
            reset.reset();
        }
        else{
            tries++;
            
            statusEL.textContent = "☹️ Sorry you guessed the wrong number !!"
            if (Number(answerEl.value) > number) {
                hintEl.textContent = "Hint : Enter a smaller number "+ answerEl.value;
            }
            else{
                hintEl.textContent = "Hint : Enter a greater number " + answerEl.value;
            }
           reset.reset();
        }
    }
}

function generateNewNumber(){
    if(number_found){
        tries = 0;
        number_found = false;
        number = Math.floor(Math.random()*100 + 1);
        hintEl.textContent = "";
        startGame();
    }
    else{
        window.alert("You can generate a new number after finding the current number.");
    }
}
