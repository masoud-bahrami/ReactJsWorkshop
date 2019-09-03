//'use strict';
//Defining an object using Literal
var ahmadEbadi = {
    firstName: "Ahmad",
    lastName: "Ebadi",
    instruments: ["Setar"],
    fullName: function() {
        console.log(this.firstName, this.lastName);
    },
    play: function() {
        this.instruments.forEach((instrument) =>
            console.log(this.firstName, this.lastName, "Paying ", instrument));
    }
}
ahmadEbadi.fullName();
ahmadEbadi.play();

//Accessing properties by name
console.log(ahmadEbadi["instruments"]);
//Create Factories to create object
function Artist(firstName, lastName, instruments) {
    console.log(this);
    return {
        firstName: firstName,
        lastName: lastName,
        instruments: instruments,
        fullName: function() {
            console.log(this.firstName, this.lastName);
        },
        play: function() {
            this.instruments.forEach((instrument) =>
                console.log(this.firstName, this.lastName, "Paying ", instrument));
        }
    }
}
//whitout using new keyword 'this' will refer to the window
var lotfi = Artist("MohammadReza", "Lotfi", ["Tar", "Setar"]);
var shajarian = Artist();
//When using new 'this' will refer to the object
var meshkatian = new Artist();


//Using built-in constructor function to create new object
const JsBuiltinFunctionArtist = new Function(
    "firstName", "lastName", "instruments",
    `
    this.firstName= firstName;
        this.lastName= lastName;
        this.instruments=instruments;
        this.fullName= function() {
            console.log(this.firstName, this.lastName);
        };
        this.play= function() {
            this.instruments.forEach((instrument) =>
                console.log(this.firstName, this.lastName, "Paying ", instrument));
        }
        `
);
var hasanKasaei = new JsBuiltinFunctionArtist("Hasan", "Kasaei");
var jalilShahnaz = new JsBuiltinFunctionArtist("Jalil", "Shahnaz");

//Adding dynamically property to an object
hasanKasaei.showAge = function() {
    console.log(this.Age);
}


console.log(hasanKasaei);
console.log(hasanKasaei.showAge());

//delete a property from an object using dot notation
delete hasanKasaei.Age;

for (var item in hasanKasaei) {

    console.log(typeof hasanKasaei[item]);
}


function Dog() {
    var a = 1;
    var b = 2;
    this.name = "Dog"
}

//Declaring Animal object
function Animal(name, color, sound, foodType) {
    this._name = name;
    this.color = color;
    this._sound = sound;
    this._foodType = foodType;
}

Animal.prototype.PrintName = function() {
    console.log("Animal name is ", this._name);
}
Animal.prototype.Sang = function() {
    console.log(this._name
        .concat(" is speaching  ")
        .concat(this._sound)
        .concat(" ..."));
}

Animal.prototype.Eat = function() {
    console.log(this._name + " is eating the  " + this._foodType + " ...");
}

//Declaring Feline object and inherit it from Animal Object
function Feline(name, handsCount, sound, color) {
    Animal.call(this, name, color, sound, "Meat");
    this._handsCount = handsCount;
}

Feline.prototype = Object.create(Animal.prototype);
Feline.prototype.constructor = Feline;

Feline.prototype.Walk = function() {
    console.log(`${this._name} is walking ...`);
}

Feline.prototype.Run = function() {
    console.log(`${this._name} is running ...`);
}


//Declaring Fowl object
function Fowl(name, sound, color, foodType = "rice") {
    Animal.call(this, name, color, sound, foodType);
}
Fowl.prototype = Object.create(Animal.prototype);
Fowl.prototype.Walk = function() {
    console.log(`${this._name} is walking ...`);
}

Fowl.prototype.Flight = function() {
    console.log(`${this._name} is flighting ...`);
}

//Test 
var myCat = new Feline("myCat", 4, "Mioooo", "Black");
myCat.PrintName();
myCat.Eat();
myCat.Walk();
myCat.Run();
myCat.Sang();

var myBird = new Fowl("myBird", "Ghogholi ghoghol", "White", "rice");
myBird.PrintName();
myBird.Eat();
myBird.Walk();
myBird.Flight();
myBird.Sang();

//Prototype way
var AnimalPrototype = {
    constructor: function(name, color, sound, foodType) {
        this._name = name;
        this.color = color;
        this._sound = sound;
        this._foodType = foodType;
    },
    PrintName: function() {
        console.log("Animal name is ", this._name);
    },
    Sang: function() {
        console.log(this._name
            .concat(" is speaching  ")
            .concat(this._sound)
            .concat(" ..."));
    },
    Eat: function() {
        console.log(this._name + " is eating the  " + this._foodType + " ...");
    }
}

//Declaring Feline object and inherit it from Animal Object
var FelinePrototype = Object.create(AnimalPrototype);
FelinePrototype.SetHandsount = (count) => {
    this._handsCount = count;
}
FelinePrototype.Walk = function() {
    console.log(`${this._name} is walking ...`);
};
FelinePrototype.Run = function() {
    console.log(`${this._name} is running ...`);
};

//Declaring Fowl object
var FowlPrototype = Object.create(AnimalPrototype);
FowlPrototype.Walk = function() {
    console.log(`${this._name} is walking ...`);
}

FowlPrototype.Flight = function() {
    console.log(`${this._name} is flighting ...`);
}

var myCatProto = Object.create(FelinePrototype);
myCatProto.constructor("myProtoCat", 4, "Mioooo", "Black");
myCatProto.Walk();
myCatProto.Run();
myCatProto.Sang();
myCatProto.PrintName();
myCatProto.Eat();

var myBirdProto = Object.create(FowlPrototype);
myBirdProto.constructor("myBirdProto", "Ghogholi ghoghol", "White", "rice");
myBirdProto.PrintName();
myBirdProto.Eat();
myBirdProto.Walk();
myBirdProto.Flight();
myBirdProto.Sang();

//ES6
class AnimalClass {
    constructor(name, color, sound, foodType) {
        this._name = name;
        this.color = color;
        this._sound = sound;
        this._foodType = foodType;
    };

    PrintName() {
        console.log("Animal name is ", this._name);
    }
    Sang() {
        console.log(this._name
            .concat(" is speaching  ")
            .concat(this._sound)
            .concat(" ..."));
    }
    Eat() {
        console.log(this._name + " is eating the  " + this._foodType + " ...");
    }
}

class FelineClass extends AnimalClass {
    constructor(name, color, sound) {
        super(name, color, sound, "Meat")
    };
    Walk() {
        console.log(`${this._name} is walking ...`);
    };
    Run() {
        console.log(`${this._name} is running ...`);
    };
}

var myCatClass = new FelineClass("myCatClass", "Green", "Mioooo");
myCatClass.PrintName();
myCatClass.Eat();
myCatClass.Walk();
myCatClass.Run();

class FowlClass extends AnimalClass {
    constructor(name, color, sound, foodType = "Rice") {
        super(name, color, sound, foodType)
    };
    Walk() {
        console.log(`${this._name} is walking ...`);
    };
    Flight() {
        console.log(`${this._name} is running ...`);
    };
}

var myBirdClass = new FowlClass("myBirdClass", "Green", "Mioooo");
myBirdClass.PrintName();
myBirdClass.Eat();
myBirdClass.Walk();
myBirdClass.Flight();