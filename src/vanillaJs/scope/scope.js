"use strict";
//global and default this
let showThis = function() {
  console.log(this); //in strict mode print undefind and then print window
};

showThis();

//object litteral this
const vocalist = {};
vocalist.name = "Mohammad Reza";
vocalist.family = "Shajarian";

vocalist.printMe = function() {
  console.log(this);
};

//{name: "Mohammad Reza", family: "Shajarian", printMe: ƒ}
// family: "Shajarian"
// name: "Mohammad Reza"
// printMe: ƒ ()
// __proto__: Object
vocalist.printMe();

//object litteral this
function CreateVocalist() {
  this.printMe = function() {
    console.log(this);
  };
}

//constructor this
let v1 = new CreateVocalist();
//CreateVocalist {printMe: ƒ}
// printMe: ƒ ()
// __proto__: Object
v1.printMe();

//prototypes' this
CreateVocalist.prototype = {
  printMe1: function() {
    console.log(this);
  }
};

var a = new CreateVocalist();
a.printMe();
a.printMe1();

//Event's this
var element = document.querySelector(".btn");
var printDom = function() {
  console.log(this); //will show the dom <div class="btn"></div>
};
//element.addEventListener("click", printDom, false);

var printDom = function() {
  console.log(this); //will show window
};

// Scope A: Global scope out here
function functionScope() {
  // Scope B: Local scope in here
}

var myFunction = function() {
  var firstName = "Masoud";
  console.log(firstName); // Masoud
};
// Uncaught ReferenceError: firstName is not defined
//console.log(firstName);

// Global's Scope
function aFunction() {
  // A's Scope
  function bFunction() {
    // B's Scope
    //bFunction has access to the outer Scope(A's scope).
    //this is called Lexical Scope or Closure or Static Scope
    function cFunction() {
      // C's Scope
      //cFunction has access to the outer Scopes(A's scope and B's scope).
    }
  }
}

// printDom.call(anotherScope, arg1, arg1);
// printDom.apply(anotherScope, [arg1, arg1]);
// printDom.bind(anotherScope, arg1, arg1);

function sayHello(name) {
  var text = "Hello, " + name;
  return function() {
    console.log(text);
  };
}

sayHello("masoud");
