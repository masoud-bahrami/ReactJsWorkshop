
//es6 version
const numbers = [1, 2, 3, 4, 5]
[first, second, ...others] = numbers

//and spread elements:

const numbers = [1, 2, 3, 4, 5]
const sum = (a, b, c, d, e) => a + b + c + d + e
const sum = sum(...numbers)

//ES2018 
const { first, second, ...others } = { first: 1, second: 2, third: 3, fourth: 4, fifth: 5 }

first // 1
second // 2
others // { third: 3, fourth: 4, fifth: 5 }

const items = { first, second, ...others }
items //{ first: 1, second: 2, third: 3, fourth: 4, fifth: 5 }


//ASYNCHRONOUS ITERATION (The new construct for-await-of allows you to use an async iterable object as the loop iteration:)


for await (const line of readLines(filePath)) {
    console.log(line)
  }

//PROMISE.PROTOTYPE.FINALLY()

  fetch('file.json')
  .then(data => data.json())
  .catch(error => console.error(error))
  .finally(() => console.log('finished'));