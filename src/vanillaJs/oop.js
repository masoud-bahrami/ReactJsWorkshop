//Procedural way
let a = 30000;
let b = 20;
let c = 20;

function compute(a, b, c) {
  return a + b * c;
}

//OOP Way
let calculator = {
  a: 30000,
  b: 20,
  c: 20,
  compute() {
    return this.a + this.b * this.c;
  }
};

//Define object using Object Literal by using curly braces
const cat = {
  weight: 20,
  voice: "mio",
  song: function() {
    console.log(this.voice);
  }
};

//access to properties using dot notation
console.log(cat.weight);
//access to properties using braker
console.log(cat["weight"]);

//Using Factories to create object
function createAnimal() {
  return {
    weight: 20,
    voice: "mio",
    song: function() {
      console.log(this.voice);
    }
  };
}
//passing paramter
function createAnimal(voice) {
  return {
    weight: 20,
    voice: voice,
    song: function() {
      console.log(this.voice);
    }
  };
}

cat1 = createAnimal("mio");
console.log(cat1.song);

//Create object using Connstructor Function
function Animal() {
  this.weight = 20;
  this.voice = "mio";
  this.song = function() {
    console.log(this.voice);
  };
}
//creare new object
let factoryCat = createAnimal("mio");

//passing parameter
function Animal(voice) {
  //if using new Animal() this is refer to the object
  //if using Animal() this is refer to the window
  console.log("this", this);
  this.weight = 20;
  this.voice = voice;
  this.song = function() {
    console.log(this.voice);
  };
}
//create new object
//By using new, under the hood js will create an object by using {}
//and the point this to that object
let newCat = new Animal("mio"); //if i'm using new, inside of the Animal this is refer to the new Animal

//Constructor properties (for every object refer to the constructor that create that object)
//if object is created using constructor function this will print
// ƒ Animal(voice) {
//   //if using new Animal() this is refer to the object
//   //if using Animal() this is refer to the window
//   console.log("this", this);
//   this.weight = 20;
//   this.voice = voice;
//   …
console.log(newCat.constructor);
//if object is created using Factory function this will print
//ƒ Object() { [native code] }
// Object is a built in constructor function in javascript
//Object created using factory function under the hood is created by calling new Object({})

let dog = Animal("miooo"); //if i'm not using new, inside of the Animal this is refer to window(global object)
console.log(Animal.constructor);

//We have this Object constructor in JS
new String(); //'sasd'
new Boolean(); //true.false
new Number(); //1,2,3,

//Function are objects
//all function in js are objects for example Animal has all nethods and properties from prototype base
// Animal.toString()
// Animal.defineProperty
console.log(Animal.constructor); //will show "ƒ Function() { [native code] }" this is a built in function in js"
//To show that Construction function type is also a type in js let show this
const JsBuiltinFunctionAnimal = new Function(
  "voice",
  `this.weight = 20;
  this.voice = voice;
  this.song = function() {
    console.log(this.voice);
  };`
);

let builtinAnimal = new JsBuiltinFunctionAnimal("mioooo");
console.log(builtinAnimal.song());
//adding property to an object using dot notation
builtinAnimal.colore = "black";

//adding property to an object using braket notation
builtinAnimal["colore"] = "black";

//delete a property from an object using dot notation
delete builtinAnimal.colore;

//delete a property from an object using braket notation
delete builtinAnimal["colore"];

//Enumerating properties using in JS
for (let key in builtinAnimal) {
  console.log(key);
  // 0: "weight"
  // 1: "voice"
  // 2: "song"
  // length: 3
  // __proto__: Array(0)
}
//show only function
for (let key in builtinAnimal) {
  if (typeof key !== "function") console.log(key);
  // 0: "weight"
  // 1: "voice"
  // length: 3
  // __proto__: Array(0)
}
//using Object.keys
console.log(Object.keys(builtinAnimal));
//Check if an object has a speciific property
if ("color" in builtinAnimal) console.log("builtinAnimal has color property");

//Abstraction
//Abstraction is means hide the details and complexity and show essential
//Private properties and methods
function AnimalWirhPrivate(voice) {
  //this is private and local
  let color = "red";
  //this is public
  this.color = color;
  this.voice = voice;
  this.location = {
    x: 0,
    y: 0
  };

  let privateDraw = function() {
    console.log(this.voice);
  };

  this.draw = function() {
    privateDraw();
  };
}

//Getters and Setters
function AnimalWithGetSetParams(voice) {
  this.voice = voice;
  let defaultLocation = {
    x: 0,
    y: 0
  };
  //property getter
  this.getDefaultLocation = function() {
    return defaultLocation;
  };

  this.song = function() {
    console.log(this.voice);
  };

  Object.defineProperty(this, "defaultLocation", {
    //get is a keyword in js
    get: function() {
      return defaultLocation;
    },
    //set is a keyword in js
    set: function(value) {
      defaultLocation = value;
    }
  });
}

var catWithPrivateMemebrs = new AnimalWithGetSetParams(10);
//using getter to access to the private properties
console.log(catWithPrivateMemebrs.getDefaultLocation());
// Object.defaineProperty getter
console.log(catWithPrivateMemebrs.defaultLocation);
//set DefaultLocation value using Object.defaineProperty setter
catWithPrivateMemebrs.defaultLocation = 20;

//Protorypes in JS
let person = {
  firstName: "Unknow",
  lastName: "Unknow",
  email: "Unknow@Refactor.ir",
  getFullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

let masoud = {
  firstName: "Masoud",
  lastName: "Bahrami",
  email: "Masoud@Refactor.ir"
};

//Set masoud prototype
//masoud is inherits from Person object
masoud.__proto__ = person;
//call a property from parrent object
console.log(masoud.getFullName());
person.email = "abc@dot.com";
person.getEmail = function() {
  return this.email;
};

let zahra = {};
zahra.__proto__ = person;
console.log(zahra.getFullName());
zahra.firstName = "Zahra";
console.log(zahra.getFullName());

//Every function in JS is anobject
//Wen we call an function inside an object
//JS will create a  new object for that function under the hood

function personFactory(firstName, lastName) {
  return {
    firstName,
    lastName,
    greet: function(person) {
      return "Hello ", person.firstName;
    }
  };
}

let jonDoe = personFactory("Jon", "Doe");
let jonSmith = personFactory("Jon", "Smith");

//this will show false, becouse the great method on JonDore
// is deffrent from the greet method from JonSmith
console.log(jonDoe.greet === jonSmith.greet);

//Let fix the abow problem using prototype
//Lets create a prototype
let personPrototype = {
  greet: function(person) {
    return "Hello ", person.firstName;
  }
};
//then use this object as the prototype of my prefered object

function personFactoryWithPrototype(firstName, lastName) {
  let person = Object.create(personPrototype, {
    firstName: { writable: false, value: firstName },
    lastName: { writable: false, value: lastName }
  });
  return person;
}

//this will show true
console.log(jonDoe.greet === jonSmith.greet);

//using classes in JS
//Define with class keyword without assign to varibale
//class Human {}
//Define with class keyword and assign it to a varibale
//const Human = class {};

class Human {
  constructor(height) {
    this.height = height;
    this.location = {
      x: 0,
      y: 0
    };
  }
  walk(x, y) {
    this.location.x = x;
    this.location.y = y;
  }
}

const h1 = new Human(185);
h1.walk(20, 30);

class Warrior extends Human {
  constructor(height) {
    super(height);
    this.strenght = 10;
  }
  //  sayHello () {
  //   return "Hello everybody !!";
  // }
  // static sayHello() {
  //   return "Hello everybody !!";
  // }
  //if we use get keword before function name,
  //we can call them as a getter property
  //console.log(warrier.sayHello);
  // static get sayHello() {
  //   return "Hello everybody !!";
  // }
}
const w1 = new Warrior(185);
h1.walk(20, 30);

//console.log(Warrior.sayHello());
//if we use get keyword befor this function,
//we can use them as a getter proeprty like this
console.log(Warrior.sayHello);
