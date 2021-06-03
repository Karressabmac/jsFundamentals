/*
FOR IN LOOPS
*/

//in does not require that the 'thing' you loop through be numbered

let student = {name: 'Peter', awesome: true, degree: 'javascript', week: 1};

for (item in student){
  //console.log(item); // returns all ITEMS: name, awesome, degree, week
    console.log(student[item]); //square brackets return the value of the item: Peter, true, javascript, 1
}

let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll'];

for (cat in catArray){
    console.log(cat);
    console.log(catArray[cat]);
}

let phoneArray = ['iphone 12', 'samsung s21', 'galaxy note 12'];

for (phone in phoneArray){
    //console.log(phone);
    console.log(phoneArray[phone]);
}

//let's write a for-in loop that capatilizes the first letter of a name.

let name = 'kaRrEssa';
let capName;

for (n in name){
    if (n == 0){
        capName = name[n].toUpperCase();
    } else {
        capName += name[n].toLowerCase();
    }
}
console.log(capName);

let student = 'kArREsSA';
let capName;

for (n in student){
    if (n == 0){
        capName = student[n].toUpperCase();
} else {
        capName += student[n].toLowerCase();
}
console.log(capName);