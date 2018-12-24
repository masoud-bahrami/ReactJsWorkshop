import { carCommands } from "./carCommands.js";
class InputParser {
  Parse(commandId) {
    return carCommands[commandId];
  }
}

export { InputParser };
