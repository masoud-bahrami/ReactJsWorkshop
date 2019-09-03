var globalVariable = "global";


//Hoisting
A();

function A() {
    var a = 5;
    B();

    function B() {
        var b = 2;
        C();

        function C() {
            var c = 3;
            D();

            function D() {
                //Closure
                //Can access to c, b, a, globalVariable
                console.log(a);
            }
        }
    }
}



function PrintFullName(genre, birthDate, instruments) {
    console.log(this);
    console.log(this.firstName, this.lastName, genre, birthDate, instruments);
}

var artist = {
    firstName: "Parvize",
    lastName: "Meshkatian",
}
PrintFullName.call(artist, "Traditional", 1334, ["Setar", "Santor"]);
PrintFullName.apply(artist, ["Traditional", 1334, ["Setar", "Santor"]]);


//Closure
console.log("==============")

function person() {
    this.name = "Mahmoud Doulatabadi";

    this.printName = function() {
        return function() { console.log(this.name) };
    }
    this.printNameArrowFunction = function() {
        return () => console.log(this.name);
    }
}

var person = new person();
var print = person.printName().bind(person);
var printArro = person.printNameArrowFunction();
printArro();
print();
person.name = "Masoud Kimiaei";
print();


//IIFE  Immediately-Invoked Function Expression 

var module = (function(name, salari) {
    var _name = name;
    var _salari = salari;

    function computeTax() {
        return _salari - (_salari * .5);
    }
    computeTax();
    return {
        tax: computeTax,
        name: _name,
        salari: _salari
    }
})("Hasan", 2500000);