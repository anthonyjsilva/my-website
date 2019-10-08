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
*/

function rockPaperScissors(hand1, hand2) {
    if (hand1 === 'rock' && hand2 === 'rock') { return 'tie'; }
    if (hand1 === 'rock' && hand2 === 'paper') { return 'paper'; }
    if (hand1 === 'rock' && hand2 === 'scissors') { return 'rock';}
    if (hand1 === 'paper' && hand2 === 'rock') { return 'paper'; }
    if (hand1 === 'paper' && hand2 === 'paper') { return 'tie'; }
    if (hand1 === 'paper' && hand2 === 'scissors') { return 'scissors'; }
    if (hand1 === 'scissors' && hand2 === 'rock') { return 'rock'; }
    if (hand1 === 'scissors' && hand2 === 'paper') { return 'scissors'; }
    if (hand1 === 'scissors' && hand2 === 'scissors') { return 'tie'; }
}

console.assert(rockPaperScissors('rock', 'rock') === 'tie');
console.assert(rockPaperScissors('rock', 'paper') === 'paper');
console.assert(rockPaperScissors('rock', 'scissors') === 'rock');
console.assert(rockPaperScissors('paper', 'rock') === 'paper');
console.assert(rockPaperScissors('paper', 'paper') === 'tie');
console.assert(rockPaperScissors('paper', 'scissors') === 'scissors');
console.assert(rockPaperScissors('scissors', 'rock') === 'rock');
console.assert(rockPaperScissors('scissors', 'paper') === 'scissors');
console.assert(rockPaperScissors('scissors', 'scissors') === 'tie');