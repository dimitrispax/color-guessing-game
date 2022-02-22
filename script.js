/* Initializing variables for elements that the program is going to use. */
let message = document.getElementById("message");
let rgb = document.getElementById("rgb");
let resetBtn = document.getElementById("reset");
let containerColor = document.getElementsByClassName("container-color");


let buttons = [];                                                       // Initializing an empty array for it to be fileld with buttons.
for (let i = 0; i < 6; i++) {                                           // Putting every button in order from 1-6 so they can be easily accessible and parsable.
    let buttonItem = "btn" + (i + 1);                                   // Id from HTML is btn + number so we access each id with this loop. 
    buttons[i] = document.getElementById(buttonItem);
}

let color = randomColorGenerator();                                     // Initializing the "correct" color of the game.
initializeGame();                                                       // Starting game items.


/**
 * initializeGame() does not require arguments.
 * It's use is to initialize all the game components.
 * 
 */
function initializeGame() {
    for (i = 0; i < 6; i++) {                                           // For evey button in the game,
        let buttonItem = "btn" + (i + 1);                               // Initialize it again.
        buttons[i] = document.getElementById(buttonItem);
        buttons[i].style.visibility = 'visible';                        // Set it visible, if it got hidden in previous states of the game.
    }
    containerColor[0].style.backgroundColor = "rgb(28, 173, 173)";      // Set background color of the top container at its default. 
    containerColor[1].style.backgroundColor = "rgb(28, 173, 173)";

    message.textContent = "Select the correct color.";                  // Set the message to be the starting one.
    resetBtn.textContent = "NEW COLORS";                                // Set the reset button text to be the starting one.
    color = randomColorGenerator();                                     // Choose a random "correct" number.
    rgb.textContent = color;                                            // Displaying to the player which is the "correct" rgb combination.
    randomButtonColorGenerator();                                       // Initialize Buttons.
}

/**
 * randomButtonColorGenerator() does not require arguments.
 * It's use is to paint each button with a random color.
 * 
 */
function randomButtonColorGenerator() {
    let correctBtnItem = "btn" + Math.floor(Math.random() * 6);        // Choosing a random buttom to paint it with the "correct" color.
    let correctBtn = document.getElementById(correctBtnItem);
    correctBtn.style.backgroundColor = color;
    console.log(correctBtn);                                           // For debugging purposes.
    for (i = 0; i < 6; i++) {                                          // For every button in the game,
        if (correctBtn === buttons[i]) {                               // except the one with the "correct" color,
            continue;
        }
        buttons[i].style.backgroundColor = randomColorGenerator();     // paint it with a random color.
    }
}

/**
 * randomColorGenerator() does not require arguments.
 * It's use is to choose randomly a color.
 * Returns a string in the format rgb(X,X,X) which represents a color.
 */
function randomColorGenerator() {
    let red = Math.floor(Math.random() * 256);                         // Setting a random value (0-255) for the red.
    let green = Math.floor(Math.random() * 256);                       // Setting a random value (0-255) for the green.
    let blue = Math.floor(Math.random() * 256);                        // Setting a random value (0-255) for the blue.

    return "rgb(" + red + ", " + green + ", " + blue + ")";            // Returning the whole new rgb(r,g,b) string.
}

/**
 * actions() does not require arguments.
 * It's use is to perform all selected actions when it's called.
 * 
 */
function actions() {
    if (this.style.backgroundColor == color) {                         // If the button that clicked has the same color as the "correct" one,
        for (i = 0; i < 6; i++) {                                      // Make every color with the same color.
            buttons[i].style.backgroundColor = color;
        }
        for (i = 0; i < containerColor.length; i++)                    // As well as the containers' color.
            containerColor[i].style.backgroundColor = color;
        message.textContent = "CORRECT!";                              // Replace the existing message with CORRECT.
        resetBtn.textContent = "PLAY AGAIN";                           // Replace the reset button's text with PLAY AGAIN.
    } else {                                                           // else,
        message.textContent = "WRONG, TRY AGAIN!";                     // Replace the existing message with WRONG, TRY AGAIN.
        this.style.visibility = 'hidden';                              // Hide the clicked button.
    }

}


for (i = 0; i < 6; i++) {                                              // Adding eventListener for every button in game.
    buttons[i].addEventListener("click", actions);                     // On click execute actions() function.
}


resetBtn.addEventListener("click", initializeGame);                    // On click of button reset execute initializeGame() function.







