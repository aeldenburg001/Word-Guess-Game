let ccdisplay = document.querySelector('.crrDisplay');
let incdisplay = document.querySelector('.incDisplay');
let guess = document.querySelector('#character');
let textForm = document.querySelector('.textForm');

         var commonWords = [
      "the", "of", "and", "a", "to", "in", "is", "you", "that", "it", 
      "he", "was", "for", "on", "are", "as", "with", "his", "they","I", "at", 
      "be","this", "have", "from", "or", "one", "had", "by", "word", "but","not",
      "what", "all", "were", "we", "when", "your", "can", "said", "there",
      "use", "an", "each", "which", "she", "do", "how", "their", "if", 
      "will","up", "other", "about", "out", "many", "then", "them",
      "these", "so","some", "her", "would", "make", "like", "him", "into", "time", "has",
       "look", "two", "more", "write", "go", "see", "number", "no", "way",
      "could", "people", "my", "than", "first", "water", "been", "call",
      "who", "oil", "its", "now", "find", "long", "down", "day", "did", 
      "get", "come", "made", "may", "part"];


// Grabbing Random Word
var chooseRandomWord = function(array) {
    return array[Math.floor(Math.random() * array.length)];
}

var chosenWord = chooseRandomWord(commonWords);
console.log(chosenWord)

// Function that submits the values
textForm.addEventListener('submit', function(event) {

var counter = 10;
var triedCharacters = [];
var correctCharacters = [];

event.preventDefault();
guess = character.value    

for (i = 0; i < chosenWord.length; i++) {
    chosenWord[i]
    for (z = 0; z < guess.length; z++) {
        if (guess[z] === chosenWord[i]) {
            correctCharacters.push(guess[z])
            console.log("correct " + correctCharacters)
        } 
        else {
            triedCharacters.push(guess[z])
            console.log("incorrect " + triedCharacters)
        }
    };
}
})