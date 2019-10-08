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
    Level 2:
    - refactor
    - support edge cases
    - write new tests for edge cases
*/

function rockPaperScissors(hand1, hand2) {
    if (typeof hand1 !== 'string' || typeof hand2 !== 'string' ) {
        return 'Please pass in strings!';
    } else if (
        hand1 !== 'rock' && hand1 !== 'paper' && hand1 !== 'scissors' ||
        hand2 !== 'rock' && hand2 !== 'paper' && hand2 !== 'scissors'
    ) {
        return 'Thats not how you play rock paper scissors...';
    } else if (hand1 === hand2) {
        return 'tie';
    } else if (
        hand1 === 'rock' && hand2 === 'paper' ||
        hand1 ==='paper' && hand2 === 'rock'
    ) { 
        return 'paper'; 
    } else if (
        hand1 === 'rock' && hand2 === 'scissors' ||
        hand1 === 'scissors' && hand2 === 'rock'
    ) { 
        return 'rock';
    } else if (
        hand1 === 'paper' && hand2 === 'scissors' ||
        hand1 === 'scissors' && hand2 === 'paper'
    ) { 
        return 'scissors';
    }
}

console.assert(rockPaperScissors(1, 'rock') === 'Please pass in strings!');
console.assert(rockPaperScissors('rock', 2) === 'Please pass in strings!');
console.assert(rockPaperScissors('roasdfasdck', 'asdaf') === 'Thats not how you play rock paper scissors...');
console.assert(rockPaperScissors('rockasdfas', 'asdfsd') === 'Thats not how you play rock paper scissors...');
console.assert(rockPaperScissors('rock', 'rock') === 'tie');
console.assert(rockPaperScissors('rock', 'paper') === 'paper');
console.assert(rockPaperScissors('rock', 'scissors') === 'rock');
console.assert(rockPaperScissors('paper', 'rock') === 'paper');
console.assert(rockPaperScissors('paper', 'paper') === 'tie');
console.assert(rockPaperScissors('paper', 'scissors') === 'scissors');
console.assert(rockPaperScissors('scissors', 'rock') === 'rock');
console.assert(rockPaperScissors('scissors', 'paper') === 'scissors');
console.assert(rockPaperScissors('scissors', 'scissors') === 'tie');