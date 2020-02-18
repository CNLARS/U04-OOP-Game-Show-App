/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
    constructor(missed, phrases, activePhrase) { 

    this.missed = 0;
    this.phrases = this.createPhrases();
    this.activePhrase = null;
    
     }
//Method creates phrases for game use & returns an array of phrases as in game options.
     createPhrases(){

const phraseList = [
    {phrase: "Who the hell do you think I am"
        },
    {phrase: "Do the Impossible"
            },
    {phrase: "See the Invisible"
               },
    {phrase: "Row Row"
                    },
    {phrase: "Fight the Power"
                         },
    {phrase: "Believe in the you who believes in yourself"
        }
    ];

return phraseList;

     }
//Math.floor(Math.random() * (phrase.length))

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


 }