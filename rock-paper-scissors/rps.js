
function rockPaperScissors(hand1, hand2) {
  return 'tie';
}


// console.assert(true == false, 'bad')

function testRockPaperScissors(hand1, hand2, expected) {
  if (rockPaperScissors(hand1, hand2) === expected) {
    console.log('[✔] Test passed!');
  } else {
    console.log('[X] Test FAILED!: ' + ' expected ' + expected)
  }
}

const tests = [
  rockPaperScissors('rock', 'rock') === 'tie',
  rockPaperScissors('paper', 'paper') === 'tie',
  rockPaperScissors('scissors', 'scissors') === 'tie',
  rockPaperScissors('rock', 'scissors') === 'rock'
];


function runTests() {
  let allTestsPassed = true;

  for (let i = 0; i < tests.length; i++) {
    if (tests[i] === false) {
      allTestsPassed = false;
      console.log('Test ' + i + ' failed!');
    }
  }

  if (allTestsPassed) {
    console.log('All tests passed!');
  }
}

runTests();
