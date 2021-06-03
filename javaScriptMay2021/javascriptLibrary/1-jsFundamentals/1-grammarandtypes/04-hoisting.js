/*
HOISTING

1-grammarAndTypes
    04-hoisting.js
*/

// EXAMPLE 1:
console.log(scissors);
var scissors = 'blue';

// EXAMPLE 1 BREAKDOWN:
var scissors;
console.log(scissors);
scissors = 'blue';

// EXAMPLE 2:
function hoistTest(){
    console.log(testVar);
    var testVar = 10;
    console.log(testVar);
}

hoistTest();

// EXAMPLE 2 BREAKDOWN:
function hoistTest(){
    var testVar;
    console.log(testVar);
    testVar = 10;
    console.log(testVar);
}

hoistTest();