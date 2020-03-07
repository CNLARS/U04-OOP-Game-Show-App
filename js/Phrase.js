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
           li.className = `hide letter ${this.phrase[i]}`;
           li.textContent = this.phrase[i];
           phraseUL.appendChild(li);

           if (li.textContent === ' ') {
            li.className = "space";
           }
         }
       }

       /**
        When selected, check if the letter exists in phrase.
        **/
      checkLetter(letter) {this.phrase.forEach(letter => {if(this.phrase.includes(letter)){
              return true;
              console.log(true);
          } else { 
              return false;
              console.log(false);
          }
       });
      }

       /**
        When true function displays matching letter on screen.
        */
      showMatchedLetter(letter) {
        const letterMatch = document.querySelectorAll('li.hide');
        for(let i = 0; i < letterMatch.length; i++){
          
          if(letter === letterMatch[i]){
          letterMatch[i].style.display = 'block';
        } else {
          letterMatch[i].style.display = 'none';
        }
      }
    }

} // <= Phrase class bracket
