function turnOnTheGas(success, error) {
    if (true) {
        console.log("turnOnTheGas")
        success();
    } else {
        error();
    }
}

function fillCettle(watter, success, error) {
    if (watter) {
        console.log("fillCettle");
        success();
    } else error("Where is the cettle");
}

function fillTea(tea, success, error) {
    if (tea) {
        {
            console.log("fillTea");
            success();
        }
    } else error("Tea is required");
}

function turnDownTheGas(success, error) {
    success();
}
turnOnTheGas(() => fillCettle(
        "Watter",
        () => fillTea("teabag",
            () => turnDownTheGas(
                () => console.log("Finish"),
                () => console.log("error")
            ),
            () => console.log(error)
        ),
        () => console.error(error)
    ),
    () => console.error(error));



function turnOnTheGasP(resolve, reject) {
    return new Promise((resolve, reject) => {
        if (true) {
            console.log("turnOnTheGasP")
            resolve();
        } else {
            reject();
        }
    })
}

function fillCettleP(watter, resolve, reject) {
    return new Promise((resolve, reject) => {
        if (watter) {
            console.log("fillCettleP");
            resolve();
        } else reject("Where is the cettle");
    })
}

function fillTeaP(tea, resolve, reject) {
    return new Promise((resolve, reject) => {
        if (tea) {
            {
                console.log("fillTeaP");
                resolve();
            }
        } else reject("Tea is required");
    });
}

function turnDownTheGasP(resolve, reject) {
    return new Promise((resolve, reject) => {
        if (false) {
            {
                console.log("fillTea");
                resolve();
            }
        } else reject("Tea is required");
    });
}

turnOnTheGasP()
    .then(() => fillCettleP("watter")
        .then(() => fillTeaP("Tea").then(() => fillTeaP("Tea")
            .then(() => turnDownTheGasP().catch((err) => console.error(err)))))
    );


async function turnOnTheGasAsync() {
    console.log("turnOnTheGasAsync")
        //Gas is turn on
    return;
}

async function fillCettleAsync(watter) {
    if (watter) {
        console.log("fillCettleAsync");
    } else return ("Where is the cettle");
}

async function fillTeaAsync(tea) {
    if (tea) {
        {
            console.log("fillTeaAsync");
        }
    } else return ("Tea is required");
}

async function turnDownTheGasAsync() {
    if (true) {
        {
            console.log("turnDownTheGasAsync");
        }
    } else return "Tea is required";
}

(async(context) => {
    console.log("asd");
    await turnOnTheGasAsync();
    await fillCettleAsync('Watter');
    await fillTeaAsync("Tea");
    await turnDownTheGasAsync();
})(this);