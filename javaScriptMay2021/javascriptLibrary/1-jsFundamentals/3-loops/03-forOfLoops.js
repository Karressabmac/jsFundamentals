/*
FOR OF LOOPS
*/

//of requires that your 'thing' you're looping through be iterable - that means it needs
//to be numbered

let student = {name: 'Peter', isAwesome: true, degree: 'javascript', week: 1};

for (item of student){
    console.log(item);
} 

let catArray = ['tabby', 'british shorthair', 'main coon', 'rag doll'];

for (cat of catArray){
    console.log(cat, 'says meow');
}
//for-of grabs the value of the thing, not the number of the position that the cat is at