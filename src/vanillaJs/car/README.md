# software-modularity-pattern


Modular programming is a software design technique that emphasizes separating the functionality of a program into independent, 
interchangeable modules, such that each contains everything necessary to execute only one aspect of the desired functionality.

## Getting Started
Modularization of a software in JavaScript befor *ES6 Module* is under the pain for *JavaScript* developers.
With ES2015 (ES6), we can take the advantages of Modularization in JavaScript  program.

## Description

In this vary simple solution in **Vanilla JavaScript** , I will try to breaking a software architecture 
in some Refactoring into more manageable and maintainable and also testable ES6 modules.

The Car1 is the first design, and the refactor trying to change and improve molecularity structure of the software.

This is just one solution. There may be a dozen other better and more appropriate solutions.
So consider this example only as a guide.
Do not stop and Do-It-Yourself(DIY).


## Description
In the first car version, we have a huge, Multi-Responsibility and don't testable. View the index.js file :)

```
const carCommands = {
  addGAS: 0,
  moving: 1,
  stopping: 2,
  turnOnTheLights: 3,
  turnOfTheLights: 4
};

let carName = "";
let command = -1;

function readCommand() {
  carName = document.querySelector("#carName").value;
}

function choiceCar() {
  command = document.querySelector("#cmdName").value;
}

function addGas(car) {
  console.log("Add Gas into ${car}.........");
}

function stopping(car) {
  console.log("${car} now is stoped<><><><>");
}

function moving(car) {
  console.log("${car} is moving>>>>>>>>>>");
}

function turnOnTheLights(car) {
  console.log("Turn On The Lights of ${car}> > > > >");
}

function turnOfTheLights(car) {
  console.log(string.Format("Turn Of The Lights of {0}< < < < <", car));
}

function excecuteCommand() {
  choiceCar();
  readCommand();
  parseCommand()(carName);
}

function parseCommand() {
  if (command == carCommands.addGAS) {
    return addGas;
  } else if (command == carCommands.moving) {
    return moving;
  } else if (command == carCommands.stopping) {
    return stopping;
  } else if (command == carCommands.turnOfTheLights) {
    return turnOfTheLights;
  } else if (command == carCommands.turnOnTheLights) {
    return turnOnTheLights;
  }
}
```
And then view the Car2 index.js file :)


```
import { CarBootStraper as Bootstraper } from "./carBootstraper.js";

function run() {
  new Bootstraper().Run();
}

export { run };
```
## Origin
This sample is the **Vanilla JavaScript** version of 
[Software-Modularity-Sample in .Net](https://github.com/masoud-bahrami/software-modularity-pattern).
