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
          Testing123: game.activePhrase.checkLetter('a')
        **/
      checkLetter(letter) { 
        
        for (let i = 0; i < this.phrase.length; i++){
          if(this.phrase.includes(letter)){
            return true;
              //console.log(true);
          } else { 
              return false;
              //console.log(false);
          }
        }
      }

       /**
        If true, function displays matching letter on screen.
          Testing123 
            game.activePhrase.showMatchedLetter('a')
        */
      showMatchedLetter(letter) {
        const letterMatch = document.querySelectorAll('li.hide');
        const hiddenLetter = document.getElementsByClassName('hide');

        for(let i = 0; i < letterMatch.length; i++){
          
          if(this.phrase.match(letter)){
            hiddenLetter[i].style.display = "block";
            console.log("working");
        } else {
            hiddenLetter[i].style.display = "none";
            console.log("try again");
      }
    }
    //   if(letter === letterMatch[i]){
    //     letterMatch[i].style.display = 'block';
    // }
  }

} // <= Phrase class bracket

/* For Later:
const qwertyButton = document.querySelectorAll('button.key');
*/