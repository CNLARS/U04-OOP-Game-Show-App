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
    game.startGame();

});

/**
* Event Listener for QWERTY button clicks
* @param (HTMLButtonElement) button - The clicked button element
*/

document.getElementsByClassName("key")
    .addEventListener("click", handleInteraction(button), console.log(handleInteraction(button) ) );