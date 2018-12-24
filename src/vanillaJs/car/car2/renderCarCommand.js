import { carCommands } from "./carCommands.js";
class RenderCarCommands {
  Execute(car, outService) {
    switch (car.Command) {
      case carCommands.addGas:
        this.addGas(car, outService);
        break;
      case carCommands.moving:
        this.moving(car, outService);
        break;
      case carCommands.stopping:
        this.stopping(car, outService);
        break;
      case carCommands.turnOfTheLights:
        this.turnOfTheLights(car, outService);
        break;
      case carCommands.turnOnTheLights:
        this.turnOnTheLights(car, outService);
        break;
    }
  }
  addGas(car, outService) {
    outService.print("Add Gas into {0}.........", car.Name);
  }

  stopping(car, outService) {
    outService.print("the {0} now is stoped<><><><>", car.Name);
  }

  moving(car, outService) {
    outService.print("The {0} is moving>>>>>>>>>>", car.Name);
  }

  turnOnTheLights(car, outService) {
    outService.print("Turn On The Lights of {0}> > > > >", car.Name);
  }

  turnOfTheLights(car, outService) {
    outService.print("Turn Of The Lights of {0}< < < < <", car.Name);
  }
}

export { RenderCarCommands };
