/*

VARIABLES

*/

//What is a variable? A bucket for storing.
var a = 1; //variant acts as a "bucket". The content of the bucket is '1'. OR has a value of '1'
var b = 2; 
console.log(a + b); //this will add 1(a) and 2(b)

//notes on naming variables:
//1) a variable must begin with a letter, underscore, or dollar sign
//2) numbers may follow the above characters, but cannot come first
    //Example: var 1a = b does not work
    // however, var a1 = b DOES WORK!
//3) Java script is case sensitive--'helllo' and 'Hello' are different variables

/*
DECLARARTIONS, INITIALIZATIONS, ASSIGNMENT
*/

/*
Declarations refer to when we 'declare' a variable (left side of '=')
   
    Example: 'var a = 1' 
    - 'var a' is the declaration

Initializations: when a variable is assigned an INITIAL value
    Example: in 'var a = 1', 1 is the value of the variable

Assignment: giving a variable a value. This can be after initialization. 
 */

var x; //declaring a variable as 'x'
console.log('Declaration 1:', x); //undefined 

x = 10; //initializing by giving 'x' a value of '10'
console.log('Initialization 1:', x); //10

x = 33;
console.log('Assignment 1:', x); //taking var 'x' and assigning it a value of '33'

var y;
console.log(y);

y = 'hello'; //we can assign a string of text as the value
console.log(y);

y = 'you are my fren';
console.log(y);

/*
Var, Let, and Const:

Var = 'old' keyword for variables'

Let = 'new' keyword for variables

Const = 'new' keyword declaring an unchangeable variable. it is aconstant, never changing value
*/

let tonight = 'great!';
const elevenFifty = 'amazing!';
console.log(tonight, elevenFifty);

tonight = 'lovely!';
console.log(tonight, elevenFifty);

// elevenFifty = 'Super!'; this will not run because we set it a 'const' value