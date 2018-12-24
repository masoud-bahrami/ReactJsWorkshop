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
  //   document.getElementById("lblName").innerText = "Add Gas into ${car}.........";
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

// function excecuteCommand() {
//   choiceCar();
//   readCommand();
//   if (command == carCommands.addGAS) {
//     addGas(carName);
//   } else if (command == carCommands.moving) {
//     moving(carName);
//   } else if (command == carCommands.stopping) {
//     stopping(carName);
//   } else if (command == carCommands.turnOfTheLights) {
//     turnOfTheLights(carName);
//   } else if (command == carCommands.turnOnTheLights) {
//     TurnOfTheLights(carName);
//   }
// }

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
