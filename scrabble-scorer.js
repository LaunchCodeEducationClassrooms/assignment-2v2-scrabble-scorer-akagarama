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
  initialWord = input.question("Let's play some scrabble! Enter a word: ");
   console.log(oldScrabbleScorer(initialWord));
   console.log(simpleScorer(initialWord));
   console.log(vowelBonusScorer(initialWord));
};

let simpleScore = 0;

function simpleScorer(word) {
  word = word.toUpperCase();
  
  for (let i = 0; i < word.length; i++) {
    simpleScore++;
  }
  console.log(`Each letter is 1 point\npoints for ${word}: ${simpleScore}`);
  return simpleScore;
}

let vowelBonusScore = 0;

function vowelBonusScorer(word) {
  word = word.toUpperCase();
  let vowels = ["A", "E", "I", "0", "U"]

  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
      vowelBonusScore = vowelBonusScore + 3;
    } else {
      vowelBonusScore = vowelBonusScore + 1;
    }
  }
console.log(`Each Vowel is 3 points and each consonant is 1\npoints for ${word}: ${vowelBonusScore} `);
return vowelBonusScore;
}

let scrabbleScore = 0;

const scoringAlgorithms = [{name: "Simple Score", description: "Each letter is worth 1 point.", scorerFunction: simpleScore
},
{name: "Bonus Vowels",
description: "Vowels are 3 pts, consonants are 1 pt.", scorerFunction: vowelBonusScore
},
{name: "Scrable",
description: "The traditional scoring algorithm.",
scorerFunction: oldScrabbleScorer
}];

function scorerPrompt() {
  scoreType = input.question("Please select scoring algorith would you like to use?\n\n0 - Simple: One point per character\n1 - Vowel Bonus: Vowels are worth 3 points\n2 - Scrabble: Uses scrabble point system\nEnter 0,1, or 2: ");

  if (scoreType == 0) {
    console.log("Algorithm Name: ", scoringAlgorithms[0].name);
    console.log("Result: ", scoringAlgorithms[0].scorerFunction(initialWord));
    } else if (scoreType == 1) {
      console.log("Algorithm Name: ", scoringAlgorithms[0].name);
      console.log("Result: ", scoringAlgorithms[1].scorerFunction(initialWord));
    } else if (scoreType == 2) {
      console.log("Algorithm Name: ", scoringAlgorithms[2].name);
      console.log("Result: ", scoringAlgorithms[2].scorerFunction(initialWord));
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

