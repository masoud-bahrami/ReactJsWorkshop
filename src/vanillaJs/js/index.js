var lex = (function(alo) {
    console.log(alo, " lexing")
});

lex("alam");

// function customeIterator(from =0 , till = Infinity , step = 1){
//     let currentValue = from;
//     var iterator = {
//         next:function(){
//             if(currentValue <= till){
//                 let result = {value : currentValue , done : false};
//                 currentValue +=step;
//             return result;}
//             else{
//         return {value : currentValue , done : true};
//             }
//     }
//     }

//     return iterator;
// }

function* customeIterator(from = 0, till = Infinity, step = 1) {
    for (i = from; i <= till; i += step) {
        yield i;
    }
}

// let it = myiterator.next();
// console.log(it);
// while(!it.done){
//     console.log(it.value);
//     it = myiterator.next();
// }

// console.log(it.value);
console.log(customeIterator);
let myiterator = customeIterator(0, 10, 2);
for (let i of myiterator) {
    console.log(i);
}







// function makeRangeIterator(start = 0, end = Infinity, step = 1) {
//     let nextIndex = start;
//     let iterationCount = 0;

//     const rangeIterator = {
//        next: function() {
//            let result;
//            if (nextIndex < end) {
//                result = { value: nextIndex, done: false }
//                nextIndex += step;
//                iterationCount++;
//                return result;
//            }
//            return { value: iterationCount, done: true }
//        }
//     };
//     return rangeIterator;
// }

// let it = makeRangeIterator(1, 10, 2);

// let result = it.next();
// while (!result.done) {
//  console.log(result.value); // 1 3 5 7 9
//  result = it.next();
// }

// console.log("Iterated over sequence of size: ", result.value); 

// // "use strict";
// // const a=[1,2];
// // a[2] = 3;
// // console.log(a);
// // let b= a;
// // b[3]=4;
// // console.log(a)
// // var person = {
// //     "name":"Masoud",
// //     "favourite" : {
// //         "music":
// //         {
// //             "zhenre" : " traditional"
// //         }
// //     }
// // };
// // console.log(Math.random())
// // console.log(person);
// // console.log(person.favourite.music.zhenre);
// // console.log(person.favourite.music["zhenre"]);
// // console.log(person["favourite"].music["zhenre"]);
// // // console.log("Test the == operator" , "17" == 17)
// // // console.log("Test the === operator" , "17" === 17)
// // // var names = ["ali" , "mamad", "hasan"];
// // // console.log("Original array" , names);
// // // names.shift();
// // // console.log("Shifted array", names);
// // // names.unshift("ali");
// // // console.log("Unshifted array" , names);
// // // console.log("Hello world!");






// // var person;

// // // person.firstName("Masoud")
// // //       .lastName("Bahrami")
// // //       .title("Software Developer")  
// // //       .phoneNumber("+989120750671")
// // //       .email("Masoud@Refactor.Ir")
// // //       .website("http://Refactor.Ir");


// // // person.print();

// var AnswerPrototype = {
//     constructor: function setFunc(value){
//         this._value = value;
//     },
//     get: function(){
//         return this._value;
//     }
// };

// console.log(AnswerPrototype);
// var lifeAnswer = Object.create(AnswerPrototype);
// console.log(lifeAnswer);
// lifeAnswer.constructor(42);
// console.log(lifeAnswer.get());

// function Answer(value) {
//     this._value = value;
// }
// Answer.prototype.get = function fn(){
//     return this._value;
// }

// console.log(Answer);

// var lifeAnswer =  Answer(20);
// console.log(lifeAnswer);

// console.log(lifeAnswer.get());