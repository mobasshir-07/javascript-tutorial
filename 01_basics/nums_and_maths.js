const score = new Number(400);
newScore = score;
newScore += 4;
console.log(`score is now ${score}`)
console.log(`new score is now ${newScore}`)

console.log(score.toFixed(2))

const otherNumber =123.896524
console.log(otherNumber.toPrecision(4));

const hundreds = 10000000
console.log(hundreds.toLocaleString('en-IN'));

const min = 10;
const max = 20;
console.log(Math.floor(Math.random()*(max - min + 1)) 
+ min);