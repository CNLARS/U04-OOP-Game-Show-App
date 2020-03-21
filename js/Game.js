/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
    constructor(missed, phrases, activePhrase){ 

    this.missed = 0;
    this.phrases = this.createPhrases();
    this.activePhrase = null;
    
     }
//Method creates phrases for game use & returns an array of phrases as in game options.
     createPhrases(){

const phraseList = [
//Uplifting Phrases from the Anime Gurren Lagann; created by calling the Phrase class using `new Phrase()`
    new Phrase("Do the Impossible"),
    new Phrase("See the Invisible"),
    new Phrase("Row Row"),
    new Phrase("Fight the Power"),
    new Phrase("Believe in the you who believes in yourself"),
    new Phrase("Who the hell do you think I am")
    ];

    return phraseList;

    }

/**
 * Selects random phrase from phrases property
 * @return {Object} Phrase object chosen to be used
 */

    getRandomPhrase(){
        const randomPhrase = Math.floor(Math.random() * (this.createPhrases().length))
    return this.phrases[randomPhrase];
    }

    startGame(){
        document.getElementById('overlay').style.display = 'none';
            this.activePhrase = this.getRandomPhrase();
                this.activePhrase.addPhraseToDisplay();      
    }

    handleInteraction(){


        
    }


    /*
        * @return {boolean} True if player matches all letters for the win.
            Testing123: game.checkForWin()
    */

    checkForWin(){

        const letterMatchSet = document.getElementsByClassName("show").length;
        const letterMatchPhrase = document.getElementsByClassName("letter").length;
    
        if(letterMatchSet === letterMatchPhrase){
         return true;
        } else {
            return false;
        }

    }

    /**
* Increases this.missed 
* Decreases a life.
* Checks: if lives > 0, else if 0 = game over.

    Testing123: game.removeLife();

*/

  //IN PROGRESS!

removeLife() {
        const key = document.getElementsByClassName("key");
        const phraseLetters = document.getElementsByClassName("letter");
        const tries = document.getElementsByClassName("tries");
        
        for(let i = 0; i < tries.length; i++){
            key[i].addEventListener('click, keyup', (e) => {
    
            if(!e.target.textContent === phraseLetters.textContent){
                
                tries[i].firstChild.src = "images/lostHeart.png";
                tries[i].firstChild.alt = "Lost Heart";
                
                this.missed++;
                
                if(this.missed === 5){
                    gameOver();
                }
            }

            });
        }
    }


    /**
* Displays game over message
* @param {boolean} gameWon - Win or Lose = true or Lose = false
*/
gameOver(gameWon){
    const overlay = document.getElementById("overlay");
    const gameOverMSG = document.getElementById("game-over-message");
    
    if(this.missed === 5){
        gameWon = true;
        overlay.style.display = 'initial';
        overlay.classList.replace("start", "lose");
        gameOverMSG.textContent = "GAME OVER: Better Luck Next Time!"
        //Includes: Loss Message / overlay update + changes class from start to lose
    } else if( this.checkForWin() ){
            gameWon = true;
            overlay.style.display = 'initial';
            overlay.classList.replace("start", "win");
            gameOverMSG.textContent = "WINNER!!!";
            //Includes: Win Message / overlay update + changes class from start to win
        } else {
            gameWon = false;
            //console.log("Keep Going");
        }

};

} //constructor closing bracket
