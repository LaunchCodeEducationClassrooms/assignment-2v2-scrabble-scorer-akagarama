// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   userToInputWord = input.question("Let's play some Scrabble! Enter a word: ");
   };

let simpleScore = 0;

function simpleScorer(word) {
  word = word.toUpperCase();

	for (let i = 0; i < word.length; i++) {
      simpleScore++;
      }
  console.log(`Each Letter is worth 1 point.\nScore for ${word}: ${simpleScore}`);
	return simpleScore;
} 
let vowelBonusScore = 0;

function vowelBonusScorer(word) {
  word = word.toUpperCase();
  let vowels = ["A", "E", "I", "O", "U"]

  for (let i = 0; i < word.length; i++) {
      if (vowels.includes(word[i])) {
        vowelBonusScore = vowelBonusScore + 3;
      } else {
        vowelBonusScore = vowelBonusScore + 1;
      }
    }
  console.log(`Each Vowel is 3 pts and each consonants is 1 pt\nScore for ${word}: ${vowelBonusScore}`);

  return vowelBonusScore;  
}

function scrabbleScore(finalpoint) {
finalpoint = finalpoint.toLowerCase();
let scrabblePoints = 0;

for (i = 0; i < finalpoint.length; i++) {
let letter = finalpoint[i];
scrabblePoints += newPointStructure[letter];
}
return scrabblePoints;
};

const scoringAlgorithms = [{
  name: "Simple Score",
  description: "Each letter is worth 1 point",
  scorerFunction: simpleScorer
},
{
name: "Bonus Vowels",
description: "Vowels are 3 pts, consonants are 1 pt.",
scorerFunction: vowelBonusScorer  
},
{
name: "Scrabble",
description: "The traditional scoring algorithm.",
scorerFunction: oldScrabbleScorer  
}];

function scorerPrompt(word) {
  
  scoreType = input.question("Describe the scoring algorithm to use?\n\n0 - Simple: One point per character\n1 - Vowel Bonus: Vowels are worth 3 points\n2 - Scrabble: Uses scrabble point system\nEnter 0, 1, or 2: ");

  
    if (scoreType == 0) {
      console.log("algorithm name: ", scoringAlgorithms[0].name);
      console.log("scorerFunction result: ", scoringAlgorithms[0].scorerFunction(userToInputWord));
    } else if (scoreType == 1) {
      console.log("algorithm name: ", scoringAlgorithms[1].name);
      console.log("scorerFunction result: ", scoringAlgorithms[1].scorerFunction(userToInputWord));
    } else if (scoreType == 2) {
      console.log("algorithm name: ", scoringAlgorithms[2].name);
      console.log("scorerFunction result: ", scoringAlgorithms[2].scorerFunction(userToInputWord));
    } 

  return scrabbleScore;
};

function transform() {};

let newPointStructure;

function runProgram() {
initialPrompt();
scorerPrompt();
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

