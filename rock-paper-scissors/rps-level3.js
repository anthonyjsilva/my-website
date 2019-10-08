/*

- re write prompt

- return on of these 4 options: 'rock', 'paper', 'scissors', or 'tie'

- possible combinations:
    - rock, rock = tie
    - rock, paper = paper
    - rock, scissors = rock
    - paper, rock = paper
    - paper, paper = tie
    - paper, scissors = scissors
    - scissors, rock = rock
    - scissors, paper = scissors
    - scissors, scissors = tie

- possible edge cases
    - if hand1 or hand2 aren't strings
        return 'must pass in strings'
    - if hand1 or hand2 are strings, but aren't rock paper or scissors
        return 'must pass in rock, paper, or scissors'
*/

/*
    Level 3:
    - refactor
    - refactor tests
*/

const ROCK = 'rock';
const PAPER = 'paper'; 
const SCISSORS = 'scissors';
const TIE = 'tie';

const INVALID_INPUT = 'Must pass in strings of either "Rock", "Paper", or "Scissors".';

function checkValidInput(input) {
    if (typeof input === 'string' && 
        (input === ROCK || input === PAPER || input === SCISSORS)
    ) {
        return true;
    } else {
        return false;
    }
}

function rockPaperScissors(hand1, hand2) {
    if (checkValidInput(hand1) && checkValidInput(hand2)) {
        if (hand1 === hand2) {
            return TIE;
        } else if (
            hand1 === ROCK && hand2 === PAPER ||
            hand1 === PAPER && hand2 === ROCK
        ) { 
            return PAPER; 
        } else if (
            hand1 === ROCK && hand2 === SCISSORS ||
            hand1 === SCISSORS && hand2 === ROCK
        ) { 
            return ROCK;
        } else if (
            hand1 === PAPER && hand2 === SCISSORS ||
            hand1 === SCISSORS && hand2 === PAPER
        ) { 
            return SCISSORS;
        }
    } else {
        return INVALID_INPUT;
    }
}

console.assert(rockPaperScissors(0, 1) === INVALID_INPUT);
console.assert(rockPaperScissors(1, ROCK) === INVALID_INPUT);
console.assert(rockPaperScissors(ROCK, 2) === INVALID_INPUT);
console.assert(rockPaperScissors('asdf', 'asdaf') === INVALID_INPUT);
console.assert(rockPaperScissors('asdf', ROCK) === INVALID_INPUT);
console.assert(rockPaperScissors(PAPER, 'asdf') === INVALID_INPUT);
console.assert(rockPaperScissors(ROCK, ROCK) === TIE);
console.assert(rockPaperScissors(ROCK, PAPER) === PAPER);
console.assert(rockPaperScissors(ROCK, SCISSORS) === ROCK);
console.assert(rockPaperScissors(PAPER, ROCK) === PAPER);
console.assert(rockPaperScissors(PAPER, PAPER) === TIE);
console.assert(rockPaperScissors(PAPER, SCISSORS) === SCISSORS);
console.assert(rockPaperScissors(SCISSORS, ROCK) === ROCK);
console.assert(rockPaperScissors(SCISSORS, PAPER) === SCISSORS);
console.assert(rockPaperScissors(SCISSORS, SCISSORS) === TIE);