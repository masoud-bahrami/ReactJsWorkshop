import { ConsoleInputeService } from "./inputService.js";
import { ConsoleOutputService } from "./outputService.js";
import { InputParser } from "./inputParser.js";
import { Car } from "./car.js";
import { RenderCarCommands } from "./renderCarCommand.js";
class CarBootStraper {
  constructor() {
    this.inputService = new ConsoleInputeService();
    this.outputService = new ConsoleOutputService();
    this.inputParse = new InputParser();
    this.car = new Car();
    this.renderCarCommands = new RenderCarCommands();
  }

  Run() {
    this.car.Name = this.inputService.ReadCar(this.outputService);
    this.car.Command = this.inputParse.Parse(
      this.inputService.ReadCommand(this.outputService)
    );
    this.renderCarCommands.Execute(this.car, this.outputService);
    this.outputService.Clear();
  }
}

export { CarBootStraper };
