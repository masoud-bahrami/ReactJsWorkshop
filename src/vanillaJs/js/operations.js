//JavaScript Arithmetic Operators

var firstNumber = 20;
var secoundNumber = 11;

console.log("Addition" , firstNumber + secoundNumber);
console.log("Subtraction" ,  firstNumber - secoundNumber);
console.log("Multiplication" , firstNumber * secoundNumber);
console.log("Division" , firstNumber / secoundNumber);
console.log("Modulus (division remainder)" , firstNumber % secoundNumber);
console.log("Increment" ,firstNumber++);
console.log("Decrement" , firstNumber--);

console.log("Increment" ,++firstNumber);
console.log("Decrement" , --firstNumber);

//JavaScript Assignment Operators

var x=5;

var y=x;
console.log("= operator" , y);

y +=x;
console.log("+= operator" , y);

y -=x;
console.log("-= operator" , y);

y *=x;
console.log("+= operator" , y);

y /=x;
console.log("/= operator" , y);

y %=x;
console.log("%= operator" , y);

//JavaScript String Operators

var firstName = "Masoud";
var lastName = "Bahrami";

var fullName = firstName + lastName;
console.log("+ operator on string" , fullName);
console.log("+= operator on string" , firstName +=lastName);

//Comparison Operators
//1. ==	equal to

var x=10;
console.log(x==10);

//2.!=	not equal
console.log(x!=10);

//===	equal value and equal type
console.log(x === "8")

//!==	not equal value and equal type
console.log(x !== "8")

//>	greater than
console.log(x > 11)

//<	less than
console.log(x < 11)

//>=	greater than or equal to
console.log(x >= 11)

//<=	less than or equal to
console.log(x <= 11)


//Conditional (Ternary) Operator

var flag = true

var x = flag ? "True" : "false";
console.log(x)

//Logical Operators
//&&

var a = 10;
var b=false
if(a==10 && b==true)
console.log("That's it")

//||	or
if(a==10 || b==false)
console.log("That's it")

//!	not

if(a==10 || !b)
console.log("That's it")

//The typeof Operator

typeof "John"                 // Returns string 
typeof 3.14                   // Returns number
typeof NaN                    // Returns number
typeof false                  // Returns boolean
typeof [1, 2, 3, 4]           // Returns object
typeof {name:'John', age:34}  // Returns object
typeof new Date()             // Returns object
typeof function () {}         // Returns function
typeof myCar                  // Returns undefined (if myCar is not declared)
typeof null                   // Returns object

//The instanceof Operator
var cars = ["Saab", "Volvo", "BMW"];

cars instanceof Array;          // Returns true
cars instanceof Object;         // Returns true
cars instanceof String;         // Returns false
cars instanceof Number;         // Returns false
