/*
TYPES

1-grammarAndTypes
    05-types.js
*/

//BOOLEAN
var on = true;
console.log(on);

let off = false;
console.log(off);

//boolean can represent: true/false, yes/no, on/off, and sometimes 0/1

//UNDEFINED
/*
Undefined usually means a variable has been declared, but it's not been assigned a value
Something has probably been forgotten
*/

let grass;
console.log(grass);

var undef = undefined;
console.log(undef);

//NULL
/*
Null means a variable has been declared and assigned a value of null

This is intentional. Null was deliberately assigned a value of null
*/

var empty = null;
console.log(empty);

/*
Null and undefinied both represent bariables with no value inside. Think of it this way--null values are for gag gifts that are boxes intentionally given with nothing inside (because that's the gag).

Undefined values are gifts given when the person giving the gift has forgotten to put the gift inside (oops!!)
*/

//NUMBERS

let myLiteralAge = 90;
console.log(myLiteralAge);

let precise = 999999999999999
console.log(precise);

let rounded = 999999999999999999
console.log(rounded);

let notQuite = 0.2 + 0.1;
console.log(notQuite);

let numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10;
console.log(numbersAreHard);

//STRINGS:

//String is any value within quoes; JS spits out the value within the quotes
let stringOne = "double quotes";
let stringTwo = 'single quotes';
console.log(stringOne, stringTwo);

//STRING CONCATENTATION VS ADDITION:

let first = 1050 + 100
let second = '1050' + '100'; //js recognizes this as two separate strings and combines them together. Output is 1050100

console.log(first);
console.log(second);

let third = 1050 + '100';
console.log(third); 
console.log(typeof third); // will tell you the 'type' of the item in your bucket that you're working with (type, undefined, boulean, null, number, etc)

/*
INTERPOLATION:
    - Requires backticks ``
    - Lets you use strings with dynamic content (they require backticks)
*/

//Example 1:
let age = 'this is a name, not an age: Lyndsie';
let string = `my age is: ${age}` //anything inside the curly braces {} turns into a string
console.log(string);

//OBJECTS

/*
What is an object?
    - A container that stores property names and their values.
    - Holds multipe data types
    - Denoted by {}
    - Have keys and values--color (key): 'blue' (value), separated with a colon, each key-value pair is separated with a comma
*/

let hulk = {
    color: 'green', //color is a string
    age: 42, //age is a number
    isStrong: true //isStrong is a bouleon
}

console.log(hulk);
console.log(hulk.color); 
console.log(typeof hulk);

//ARRAYS

/*
What is an array?
    - Arrays store multiple values in an ordered way
        - Example: first, second, third order.
        - They too, hold multiple data types.
        - Denoted by []
        - Has values ('blue', 'green', 'yellow')
        - Are Separated by commas
*/

var stepsToBrushTeeth = ['uncap toothpaste', 'squeeze toothpaste', 'rinse brush', 'brush', 'clean tooth'];
//array indexing begins with 0 as the first set of string
//console.log(stepsToBrushTeeth);
console.log(stepsToBrushTeeth[4]);
console.log(typeof stepsToBrushTeeth);
