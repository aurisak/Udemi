// John and a friend invented a simple game where the player with the highest value of his height (in centimeters) plus five times his age wins (what a silly game :)

// 1. Create variables for the heights and ages of two friends and assign them some values
// 2. Calculate their scores
// 3. Decide who wins and print the winner to the console. Include the score in the string that you output to the console. Don't forget that there can be a draw (both players with the same score).

// 4. EXTRA: Add a third player and now decide who wins. Hint: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)

var hightJohn = 195;
var hightJimmy = 195;

var ageJohn = 32;
var ageJimmy= 32;

var scoreJohn = hightJohn + ageJohn * 5;
    console.log (scoreJohn);
var scoreJimmy = hightJimmy + ageJimmy * 5;
    console.log (scoreJimmy);

if (scoreJohn > scoreJimmy) {
    console.log(`John is the winner.`);
} else if (scoreJimmy < scoreJohn) {
    console.log(`Jimmy is the winner.`);
} else {
    console.log(`It is a draw.`);
}

var hightJohn = 178;
var hightJimmy = 178;
var hightLena = 154;

var ageJohn = 32;
var ageJimmy = 32;
var ageLena = 30;

var scoreJohn = hightJohn + ageJohn * 5;
    console.log (scoreJohn);
var scoreJimmy = hightJimmy + ageJimmy * 5;
    console.log (scoreJimmy);
var scoreLena = hightLena + ageLena * 5;
    console.log (scoreLena);    

if (scoreJohn > scoreJimmy && scoreJohn > scoreLena) {
    console.log(`John is the winner.`);
} else if (scoreJimmy > scoreJohn && scoreJimmy > scoreLena) {
    console.log(`Jimmy is the winner.`);
} else if (scoreLena > scoreJohn && scoreLena > scoreJimmy) {
    console.log(`Lena is the winner`);
}  else {
    console.log(`It is a draw.`);
}
