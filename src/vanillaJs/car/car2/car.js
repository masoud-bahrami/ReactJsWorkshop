import { carCommands as Commands } from "./carCommands.js";

class Car {
  constructor(name) {
    this.Name = name;
    this.FuelType = "";
    this.command = Commands.addGAS;
  }
}
export { Car };
