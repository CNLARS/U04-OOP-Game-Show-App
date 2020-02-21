/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

  class Phrase {

    constructor(phrase){
        this.phrase = phrase;
      }

      addPhraseToDisplay(){
         const phraseUL = document.getElementById("phrase").firstElementChild;

         for (let i = 0; i < this.phrase.length; i++){

           const li = document.createElement('li');
           li.className = "hide letter " + this.phrase[i];
           li.textContent = this.phrase[i];
           phraseUL.appendChild(li);

           if (li.textContent === ' ') {
            li.className = "space";
           }
         }
       }

       /**
        * Checks to see if the letter selected by the player matches.
        * Checks if passed letter is in phrase
        * @param (string) letter - Letter to check
        */
        checkLetter(letter) {

document.getElementsByClassName("key").addEventListener("click", () => {
   //if (document.getElementsByClassName("key").innerHTML == document.getElementById("phrase").innerHTML) {

     console.log("testing123");
  // }

});

         
        };
        

        /**
         * 
         * Reveals the letter(s) on the board that matches the
         player 's selection. To reveal the matching letter(s), select all of the letter DOM
         elements that have a CSS class name that matches the selected letter and
         replace each selected element 's `hide` CSS class with the `show` CSS class.
         * 
         * Displays passed letter on screen after a match is found
         * @param (string) letter - Letter to display
         */
        showMatchedLetter(letter) {};



  }
