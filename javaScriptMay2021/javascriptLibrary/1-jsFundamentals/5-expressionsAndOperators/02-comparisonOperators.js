 /*
 COMPARISON OPERATORS

 5-expressionsAndOperators
    02-comparisonOperators.js
*/

//equality comparison operator ==
// looks for 'sameness'
console.log('3' == 3); //TRUE
console.log(4 == 4); //TRUE
console.log(3 == '4'); //FALSE

//strict equality comparison operator ===
console.log(3 === 3); //TRUE because 3 and 3 are the same values and types (numer)
console.log('3' === 3); //FALSE because the 'types' are different'

/*not equal comparison operator !=
- looks for "differentness" 
*/
console.log('3' != 4); // TRUE because both the 'types' and 'values' are different
console.log('3' != 3); // FALSE because it looks only for value, not types

/* strict not equal comparison operator
- cares about type and value
*/
console.log('3' !== 3); // TRUE because they are not equal. Type and value are different
console.log(3 != 3);

// greater than comparison operator
console.log(3 > 2);
console.log(2 > 2);

//less than
console.log(2 < 3);
console.log(3 <2);

//greater than or equal to
console.log(3 >= 2); //TRUE
console.log(3 >= 3); //TRUE

//less than or equal to
console.log(2 <= 3); //TRUE
console.log(3 <= 2); //FALSE

//And both expressions on either side of the operator must be true for 'And' to return true)
console.log(1<2 && 3>0); //TRUE
console.log(2<1 && 3>0); //FALSE 

//Or (either expression on one side of the operator must be true for 'Or' to return true)
console.log(1>2 || 3<0); //TRUE
console.log(2<1 || 3<0); //FALSE

let obj = {key: 'test'};
console.log(obj == {key: 'test'}); //FALSE because 

console.log(obj == obj); //TRUE

let arr = [1,2,3,4];

console.log(arr == [1,2,3,4]); //FALSE
console.log(arr == arr); //TRUE




S
