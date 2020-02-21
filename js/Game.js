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

 }