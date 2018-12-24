class ConsoleInputeService {
  ReadCommand(outService) {
    outService.print(
      "---------------------------Welcome----------------------------------------"
    );
    outService.print(
      "Please Choose Op:\t0:AddGas\t1:Moving\t2:Stoping\t3:TurnOnTheLights\t4:TurnOfTheLights"
    );
    let command = document.querySelector("#cmdName").value;
    return command;
  }

  ReadCar(outService) {
    outService.print("Please entere the your's car name.......");
    let carName = document.querySelector("#carName").value;
    return carName;
  }
}

export { ConsoleInputeService };
