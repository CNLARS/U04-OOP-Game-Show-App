/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 //testing 123 const phrase = new Phrase();
//testing 123 const game = new Game();

// const phrase = new Phrase('Life is like a box of chocolates');

// const game = new Game();
// game.phrases.forEach((phrase, index) => {
//     console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
// });

// const logPhrase = (phrase) => {
//     console.log(`Phrase - phrase: `, phrase.phrase);
// };
// const game = new Game();
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());

// const game = new Game();
// const randomPhrase = game.getRandomPhrase();
// const phrase = new Phrase(randomPhrase.phrase);
// phrase.addPhraseToDisplay();

// const game = new Game();
// game.startGame();
// console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);

let game = '';
document.getElementById("btn__reset").addEventListener("click", () => {
    game = new Game();
    game.resetGame();
    game.startGame();
    

});

/**
* Event Listener for QWERTY button clicks
* @param (HTMLButtonElement) button - The clicked button element
The forEach loops through each key to have an event listener, when clicked calls handleInteraction() on game object.
*/

 let buttonKey = document.querySelectorAll("button.key");
 
 buttonKey.forEach(key => key.addEventListener("click", (event) => game.handleInteraction() )
 
 );


 //Dabbling with EE eventListener
 document.addEventListener("keyup", (event) => {
     for(i = 0; i < buttonKey.length; i ++){

        if( event.key === buttonKey[i].textContent ){
            console.log(event.key); //Testing123
            // X game.handleInteraction(buttonKey[i].textContent);
            //game.handleInteraction(event.key); **Does not update QWERTY keys, class name updates body > keys and auto removesLife(). 
        }

     }
   
    
  });