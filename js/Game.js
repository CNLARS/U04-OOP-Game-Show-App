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
        * @return {boolean} True if player matches all letters + game has been won.
            Testing123: game.checkForWin()
    */

    checkForWin(){
        const letterMatchSet = [document.querySelectorAll('li.hide')];
        const letterMatchArray = [];
            letterMatchSet.forEach(letter => letterMatchArray.push(letter) );
        showMatchedLetter(letter);
        if( (letterMatch[i].style.display !== 'none') && letterMatch[i].style.display === letterMatchArray){
            return true;
        }else{
            return false;
        }
    }

    /**
* Increases the value of the missed property
* Subtracts a life from player.
* Checks if there are remaining lives and ends game if there are none.
*/

  //IN PROGRESS!
removeLife() {};

 }