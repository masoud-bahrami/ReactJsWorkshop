//async  / await

function chainCallbacks() {
  loadData(function(a) {
    loadDependentData(a, function(b) {
      processData(b, function(c) {
        saveData(c, function(d) {
          console.log(d);
        });
      });
    });
  });
}

//ECMA 2015
function chainPromisses() {
  loadData()
    .then(a => loadDependentData(a))
    .then(b => processData(b))
    .then(c => processData(c))
    .then(d => console.log(d));
}

//ECMA 2017
async function awaitCalls() {
  const a = await loadData();
  const b = await loadDependentData(a);
  const c = await processData(b);
  const d = await saveData(c);
  console.log(a);
}

//Promise.all ECMA 2015
function multiSetProcess() {
  let taskA = loadDataSet1();
  let taskB = loadDataSet2();

  Promise.all(
    [a, b].then(results => {
      processData(...results).then(c => console.log(c));
    })
  );
}
//ES2017
async function multiSetProcess() {
  let taskA = loadDataSet1();
  let taskB = loadDataSet2();

  const [a, b] = await Promise.all([taskA, taskB]);

  (async () => {
    console.log(await processData(a, b));
  })();
}

//rest and spread
//rest ECMA 2015
let arrToThree = [1, 2, 3];
let arrToSix = [...arrToThree, 4, 5, 6];

console.log(arrToSix);

function sum(...allArgs) {
  return allArgs.reduce((prev, curr) => {
    return prev + curr;
  });
}

console.log(sum(2, 4, 6, 8, 25, 10));

//ES 2018
//Spread properties for object initialization
let person = { first: "Masoud", last: "Bahrami" };
let work = { company: "Refactor.Ir", location: "Tehran" };

let user = {
  ...person,
  ...work,
  loveJavaScript: true
};
//the above decleration is equal to bellow decleration
let user1 = {
  first: "Masoud",
  last: "Bahrami",
  company: "Refactor.Ir",
  location: "Tehran",
  loveJavaScript: true
};

//ES2018
//rest proeprties for destructuring
let { first, last, ...info } = user1;
console.log(info);

let { first: f, last: l, ...information } = user1;
console.log(information);



function wait(ms){
  return rew Promise(r=>setTimeout(r,ms));
}

async function hello()
{
  await wait(50);
}
async function foo(){
  await wait(500);
  throw new Error('bar');
}
