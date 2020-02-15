/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

  class Phrase {
      constructor(phrase){

        this.phrase = phrase;

      }

       addPhraseToDisplay() {

         const phraseUL = document.getElementById("phrase").firstElementChild;

         for (let i = 0; i < this.phrase.length; i++) {
           const li = document.createElement('li');
           li.className = "hide letter " + this.phrase[i];
           li.textContent = this.phrase[i];
           phraseUL.appendChild(li);

           if (li.textContent === ' ') {
             li.className = "space";
           }

         }

       }

  }
