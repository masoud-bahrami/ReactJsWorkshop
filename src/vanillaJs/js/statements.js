//if statement.
//The if statement specifies a block of code to be executed if a condition is true:
var x = 10;
if (x == 10) {
    console.log("x=10")
} else if (x > 10) {
    console.log("x>10")
} else {
    console.log("x<10")
}

//JavaScript for Statement

var i;
for (i = 0; i < 5; i++) {
    console.log(i);
}

var cars = ["BMW", "Volvo", "Saab", "Ford"];

for (i = 0, len = cars.length, text = ""; i < len; i++) {
    console.log(cars[i]);
}


var person = { fname: "John", lname: "Doe", age: 25 };

for (x in person) {
    console.log(person[x]);
}

var cars = ['BMW', 'Volvo', 'Mini'];

for (x of cars) {
    console.log(x);
}

//While statement
var cars = ["BMW", "Volvo", "Saab", "Ford"];
var i = 0;
while (i < cars.length) {
    console.log(cars[i]);
    i++;
}
console.log("=======")
var carName = "Pride"
switch (carName) {
    case "Pride":
        console.log("Pride");
        break;
    case "Ford":
        console.log("Pride");
        break;
    default:
        break;
}


var text = "";
var i = 0;
do {
    console.log(i);
    i++;
}
while (i < 5);


//JavaScript function Statement

function toCelsius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
}

temp = toCelsius(35);
text = "The temperature is " + temp + " Centigrade";
console.log(text);


var fibo = 0;
var i = 0;
while (fibo <= 20) {
    if (fibo == 0) {
        console.log(fibo);
        i = fibo;
        fibo += 1;
    }
    if (fibo == 1) {
        console.log(fibo);
        i = fibo;
        fibo += 1;
    }
    if (fibo == 2) {
        console.log(fibo);
        i = fibo;
        fibo += 1;
    } else {
        console.log(fibo);

        var j = fibo;
        fibo += i;
        i = j;
    }
}

console.error("==========");

var i = 0;
for (fibo = 0; fibo <= 20;) {
    if (fibo == 0) {
        console.log(fibo);
        i = fibo;
        fibo += 1;
    }
    if (fibo == 1) {
        console.log(fibo);
        i = fibo;
        fibo += 1;
    }
    if (fibo == 2) {
        console.log(fibo);
        i = fibo;
        fibo += 1;
    } else {
        console.log(fibo);

        var j = fibo;
        fibo += i;
        i = j;
    }
}