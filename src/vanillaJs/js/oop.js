//Clasic way

function Answer(value) {
    this._value = value;
}
Answer.prototype.get = function fn1() {
    return this._value;
}

var lifeAnswer = new Answer(42);
lifeAnswer.get(); //42

var dessertAnswer = new Answer(3.14);
dessertAnswer.get(); // 3.14


function FirmAnswer(value) {
    Answer.call(this, value);
}
FirmAnswer.prototype = Object.create(Answer.prototype);
FirmAnswer.prototype.constructor = FirmAnswer;

FirmAnswer.prototype.get = function f2() {
    return Answer.prototype.get.call(this) + "!!"
}

var luckyAnswer = new FirmAnswer(7);
luckyAnswer.get(); // 7!!

var magicAnswer = new FirmAnswer(3);
luckyAnswer.get(); // 3!!


//Prototype 
var AnswerPrototype = {
    constructor: function fn(value) {
        this._value = value;
    },
    get: function fn1() {
        return this._value;
    }
}

var lifeAnswer = Object.create(AnswerPrototype);
lifeAnswer.constructor(42);
lifeAnswer.get(); //42

var dessertAnswer = Object.create(AnswerPrototype);
dessertAnswer.constructor(3.12);
dessertAnswer.get(); //3.12


var FirmAnswerPrototype = Object.create(AnswerPrototype);
FirmAnswerPrototype.get = function fn2() {
    return AnswerPrototype.get.call(this) + "!!";
}

var luckiAnswer = Object.create(FirmAnswerPrototype);
lifeAnswer.constructor(7);
luckiAnswer.get(); //7!!

var magicAnswer = Object.create(FirmAnswerPrototype);
magicAnswer.constructor(3);
magicAnswer.get(); //3!!

//ES6
class Answer {
    constructor(value) {
        this._value = value;
    }

    get() {
        return this._value;
    }
}

var lifeAnswer = new Answer(42);
lifeAnswer.get(); //42

var dessertAnswer = new Answer(3.14);
dessertAnswer.get(); //3.14

class FirmAnswer extends Answer {
    constructor(value) {
        super(value);
    }
    get() {
        return this._value + "!!";
    }
}

var luckiAnswer = new FirmAnswer(7);
luckiAnswer.get(); //7!!

var magicAnswer = new FirmAnswer(3);
magicAnswer.get(); //3!!