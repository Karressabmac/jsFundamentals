/*
IF CONDITIONALS
*/

let isOn = true;

if (isOn == true); 
console.log('the light is on');

if (isOn) { // don't need '== true' because the conditional is already checking for trueness/falseness
    console.log('The light is on, yay!');
}

//IF ELSE
let weather = '65';

if (weather < 70){
    console.log('Wear a jacket!');
} 

let string = 'Tyler';

if (string === 'Tyler' || false){
    console.log('if statements and conditionals are powerful!');
} // true because '||' only compares if one of the conditionals are true. and string === 'Tyler' is true

if (weather < 70){
    console.log('wear a jacket');
} else {
    console.log('No jacket necessary!');
}

// you can blend complex conditionals and if-else statements based upon your needs:
//Example:
if (weather > 70 && typeof weather === 'number'){
    console.log('This weather is amazing!');
} else {
    console.log('Either the temperature is cool, the variable is not a string, or both');
}

//ELSE IF

//if-else statements can be chained

let age = 17;

if (age >= 25){
    console.log('yay! you can rent a car!');
} else if (age >= 21){
    console.log('Yay! You can drink!');
} else if(age >= 18){
    console.log('Yay! You can vote!');
} else {
    console.log('Sorry, you are too young to do anything fun');
}


