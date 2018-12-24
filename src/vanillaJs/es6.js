//1-Arrow function
const foo = function foo() {
    //...
  }
  const foo1 = () => {
    //...
  }

  const foo2 = () => foo()


 //2-PROMISES
 //using callback
 setTimeout(function() {
    console.log('I promised to run after 1s')
    setTimeout(function() {
      console.log('I promised to run after 2s')
    }, 1000)
  }, 1000)
  //using promise
  const wait = () => new Promise((resolve, reject) => {
    setTimeout(resolve, 1000)
  })
  
  wait().then(() => {
    console.log('I promised to run after 1s')
    return wait()
  })
  .then(() => console.log('I promised to run after 2s'))

//classes
class Person {
    constructor(name) {
      this.name = name
    }
  
    hello() {
      return 'Hello, I am ' + this.name + '.'
    }
  }
  
  class Actor extends Person {
    hello() {
      return super.hello() + ' I am an actor.'
    }
  }
  
  var tomCruise = new Actor('Tom Cruise')
  tomCruise.hello()

  //GETTERS AND SETTERS
  //getter
  class Person {
    get fullName() {
      return `${this.firstName} ${this.lastName}`
    }
  }
//setter
  class Person {
    set age(years) {
      this.theAge = years
    }
  }


  //IMPORTING MODULES

  //import * from 'mymodule'
//import React from 'react'

// export var foo = 2
// export function bar() { /* ... */ }


//TEMPLATE LITERALS
const string3 = `Hey
this

string
is awesome!`

const string = `something ${1 + 2 + 3}`
const string2 = `something ${foo() ? 'x' : 'y' }`

//DEFAULT PARAMETERS

const foo = function(index = 0, testing = true) { /* ... */ }
foo()

const a = [1, 2, 3]
const b = [...a, 4, 5, 6] //[1,2,3,4,5,6]
const c = [...a]

//DESTRUCTURING ASSIGNMENTS
const person = {
    firstName: 'Tom',
    lastName: 'Cruise',
    actor: true,
    age: 54, //made up
  }
  
  const {firstName: name, age} = person

  const a = [1,2,3,4,5]
const [first, second] = a

const [first, second, , , fifth] = a

//FOR-OF LOOP

//iterate over the value
for (const v of ['a', 'b', 'c']) {
    console.log(v);
  }
  
  //get the index as well, using `entries()`
  for (const [i, v] of ['a', 'b', 'c'].entries()) {
    console.log(i, v);
  }




  //iterator
  function makeRangeIterator(start = 0, end = Infinity, step = 1) {
    let nextIndex = start;
    let iterationCount = 0;

    const rangeIterator = {
       next: function() {
           let result;
           if (nextIndex <= end) {
               result = { value: nextIndex, done: false }
               nextIndex += step;
               iterationCount++;
               return result;
           }
           return { value: iterationCount, done: true }
       }
    };
    return rangeIterator;
}

let it = makeRangeIterator(1, 10, 2);

let result = it.next();
while (!result.done) {
 console.log(result.value); // 1 3 5 7 9
 result = it.next();
}

console.log("Iterated over sequence of size: ", result.value); // 5

//Generator functions
function* makeRangeIterator(start = 0, end = Infinity, step = 1) {
    let iterationCount = 0;
    for (let i = start; i < end; i += step) {
        iterationCount++;
        yield i;
    }
    return iterationCount;
}

let name = "masoud";
let age = "28";

let ageField = "age";

let obj = {
    name : "max",
    [ageField] : 28,
    "age me"(){
        console.log(this.name + ', ' + this.age);
    }
};
console.log(obj["age me"]);


let numbers = [1,2,3,4,5];

function sumUp(toAdd)
{
    let result = 0;
for(let i =0; i<toAdd.lenght ; i++)
{
    result +=toAdd[i];
}
return result;
};

function sumUpWithRestOperaotr(...toAdd)
{
    let result = 0;
for(let i =0; i<toAdd.lenght ; i++)
{
    result +=toAdd[i];
}
return result;https://toddmotto.com/everything-you-wanted-to-know-about-javascript-scope/
};


console.log(...numbers); //spread an array to its members. print 1 and then 2 and so on


//the For of loop

for(let _number in numbers){
    console.log(_number);
}

//using backtick(``) we can have string in ultiple line


var obj1 = {
    name:"Mas",
    age : 28
};

let [a,b] = obj; // a=name and b = 28

