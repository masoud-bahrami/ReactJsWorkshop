function showError(err) {}
fetch('https://api.github.com/users/masoud-bahrami')
    .then(response => response.json())
    .then(data => {
        console.log(data) // Prints result from `response.json()` in getRequest
    })
    .catch(error => console.error(error))

console.log([1, 2, 3])
console.dir([1, 2, 3])
console.error("Error")
console.info("info")
console.log("%cExtra Large Yellow Text with Red Background", "background: red; color: yellow; font-size: x-large");

//Boolean JavaScript booleans can have one of two values: true or false.

var x = Boolean(false);
console.dir(x);
console.log(x);

//JavaScript Numbers
var x = 3.14; // A number with decimals
var y = 34; // A number without decimals

console.log(Number.isSafeInteger(x))

//String
//JavaScript Strings
//A JavaScript string stores a series of characters like "John Doe".
//A string can be any text inside double or single quotes:

var carName1 = "Volvo XC60";
var carName2 = 'Volvo XC60';

//Array
var cars = ["Saab", "Volvo", "BMW"];
console.log(cars.slice(1, 1));
console.log(cars);
cars.push("Pride");

console.log(cars);
var pride = cars.pop();
console.log(pride);
cars.shift();
console.log(cars);
cars.unshift("Pride");
console.log(cars);

console.log(cars.join());
console.log(cars.sort());



//document.write("Salam");
//document.getElementById("body").innerHTML = "Hi my friends";

function onClickMe(doc) {
    var x = document.getElementById("fname");
    x.value = x.value.toUpperCase();
}