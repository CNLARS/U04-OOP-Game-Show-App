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
           li.className = `hide letter ${this.phrase[i].toLowerCase()}`; //Advised to add `.toLowerCase()`
           li.textContent = this.phrase[i].toLowerCase();
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
          Testing123: game.activePhrase.showMatchedLetter('a')
        */

      showMatchedLetter(letter) {
        //phraseLetters as advised by @Emma W
        const phraseLetters = document.getElementsByClassName(letter);

        for(let i = 0; i < phraseLetters.length; i++){
          
          if(letter === phraseLetters){
            phraseLetters[i].classList.remove("hide");
            //console.log("working");
        } else {
            phraseLetters[i].classList.replace("hide", "show");
            //console.log("try again");
      }
    }
  }

} // <= Phrase class bracket

