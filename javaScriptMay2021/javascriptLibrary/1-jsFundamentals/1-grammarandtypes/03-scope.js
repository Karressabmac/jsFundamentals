/*

SCOPE

1-grammarAndTypes
    03-scope.js
*/

/*
What is scope?

JS has both LOCAL and GLOBAL scope
Global scope - anything we write in the most left-indentent part of our style.
Locally scoped - 
Function is a tool available for whenever we need to call on it. Think of it as a power tool.
*/

//example 1
var x = 12; //global scope

function scope(){
   var x = 33;
    console.log(x);
}
scope(); //logs 33
    console.log(x); //logs 12

//EXAMPLE 2
var x = 12;

function scope(){
    x = 33;
    console.log(x);
}
scope() //33
    console.log(x); //33

//EXAMPLE 3
    var x = 1;

    function scope(){
        var x = 2;
        function scopeInner(){
            var x = 3;
            console.log(x); //3
        }
        scopeInner();
        console.log(x); //2
    }
    scope();
    console.log(x); //1

//EXAMPLE 4 (CONTRASTS WITH EXAMPLE 5)
    var x = 12;

    function scope (){
        x = 33;
        if (true){
            let x = 45;
            console.log(x);
        }
        console.log(x);//33
    }

    scope();
    console.log(x);

    //EXAMPLE 5
    var x = 12; //global level

    function scope(){
        var x = 33; //intermediate level
        if(true){
        var x = 45;
        console.log(x); //45
    }
   console.log(x); //45 -> var doesn't obey 'block' scope
    }

    scope();
    console.log(x); //12