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
    new Phrase("do the impossible"),
    new Phrase("see the invisible"),
    new Phrase("row row"),
    new Phrase("fight the power"),
    new Phrase("believe in the you who believes in yourself"),
    new Phrase("who the hell do you think I am")
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

removeLife() {
        const img = document.getElementsByTagName('img');
        
        //for(let i = 0; i < img.length; i++){

            //if( (img.src = "images/liveHeart.png") === img[i].getAttribute("src") ){
                
                img[this.missed].src = "images/lostHeart.png";
                img[this.missed].alt = "Lost Heart";
                
                this.missed += 1;  
                
                if(this.missed === 5){
                    this.gameOver(true);
                }

                //break; // Successfully breaks inside the if statement only when run, else the loop runs again.
            //}
        //}  
//^ Refactor Remnants for future reference.
    }

    /**
* Displays game over message
* @param {boolean} gameWon - Win or Lose = true or Lose = false
*/

gameOver(gameWon){
    const overlay = document.getElementById("overlay");
    const gameOverMSG = document.getElementById("game-over-message");
    
    
    if(this.missed === 5){
            //Includes: Loss Message / overlay update + changes class from start to lose
        overlay.style.display = 'initial';
        overlay.classList.replace("start", "lose");
        gameOverMSG.textContent = "👾🔥☠️ GAME OVER! 👾🔥☠️";
        // this.resetGame();
        
            return gameWon = false; 
    } 
    
    if( this.checkForWin() ){
            //Includes: Win Message / overlay update + changes class from start to win  
        overlay.style.display = 'initial';
        overlay.classList.replace("start", "win");
        gameOverMSG.textContent = "⭐⭐⭐⭐⭐ WINNER!!! 🏆";
        // this.resetGame();
        
            return gameWon = true; 
        }

}

/**
* Handles onscreen keyboard button clicks
* @param (HTMLButtonElement) event.target = QWERTY Key element/button
*/

handleInteraction(button){
    button = event.target;
    const guessedLetter = button.textContent;
    console.log(button); //Testing123

//If the phrase does not contain the guessed letter: disable, update class = "wrong", and removeLife();
    if( !this.activePhrase.checkLetter(guessedLetter) ){
        button.disabled = true;
        button.className = "wrong";
        this.removeLife();

    } else {

 /*If the phrase contains the guessed letter: 
 disable, update class = "chosen", showMatchedLetter(), checkForWin(), and determine gameOver();
 */ 
        button.disabled = true;
        button.className = "chosen";
       
        this.activePhrase.showMatchedLetter(guessedLetter);
        this.checkForWin();

        if(this.checkForWin() === true){
            this.gameOver();
        }
    }

    };

/*  Reset the game after gameOver() 

onclick "Start Game" button will...

-Remove all `li` elements from the Phrase `ul` element.
-Reset CSS class to default "key".
-Disabled set to false.
-Restore and display all `liveHeart.png` in the scoreboard.
-`this.missed` set to 0.

*/


resetGame(){
    const ul = document.getElementById("phrase").firstElementChild;
    const spaces = document.querySelectorAll("li.space");
    const keyButtons = document.getElementsByTagName("button");
    const img = document.getElementsByTagName('img');

    //Removes li from ul [at the advice of @Emma W]
    ul.innerHTML = "";

    
       //Updates keyButtons 
        for(let i = 0; i < keyButtons.length; i++){

            keyButtons[i].disabled = false;
            keyButtons[i].className = "key";

            }
        //Restores Game "Lives"
        for(let i = 0; i < img.length; i++){
                img[i].src = "images/liveHeart.png";
                img[i].alt = "Heart Icon";
        }

        this.missed = 0; //Resets to zero

        //see eventListener on "btn__reset" for this.startGame();
}

} // <= constructor closing bracket

//Happy Coding!
