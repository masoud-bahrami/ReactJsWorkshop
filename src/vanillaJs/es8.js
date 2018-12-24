//STRING PADDING (The purpose of string padding is to add characters to a string, so it reaches a specific length.)

padStart()	
console.log(‘test’.padStart(4)) //'test'
console.log(‘test’.padStart(5))//	' test'
console.log(‘test’.padStart(8))	//' test'
console.log(‘test’.padStart(8, ‘abcd’)) //	'abcdtest'

padEnd()	
‘test’.padEnd(4)	'test'
‘test’.padEnd(5)	'test '
‘test’.padEnd(8)	'test '
‘test’.padEnd(8, ‘abcd’)	'testabcd'

//OBJECT.VALUES() (This method returns an array containing all the object own property values.)
const person = { name: 'Fred', age: 87 }
Object.values(person) // ['Fred', 87]
const people = ['Fred', 'Tony']
Object.values(people) // ['Fred', 'Tony']

// OBJECT.ENTRIES()(This method returns an array containing all the object own properties, as an array of [key, value] pairs.)

const person = { name: 'Fred', age: 87 }
Object.entries(person) // [['name', 'Fred'], ['age', 87]]

const people = ['Fred', 'Tony']
Object.entries(people) // [['0', 'Fred'], ['1', 'Tony']]

//GETOWNPROPERTYDESCRIPTORS() (This method returns all own (non-inherited) properties descriptors of an object.)


//ASYNC FUNCTIONS
function doSomethingAsync() {
    return new Promise((resolve) => {
        setTimeout(() => resolve('I did something'), 3000)
    })
}

async function doSomething() {
    console.log(await doSomethingAsync())
}

console.log('Before')
doSomething()
console.log('After')

function promiseToDoSomething() {
    return new Promise((resolve)=>{
        setTimeout(() => resolve('I did something'), 10000)
    })
}

async function watchOverSomeoneDoingSomething() {
    const something = await promiseToDoSomething()
    return something + ' and I watched'
}

async function watchOverSomeoneWatchingSomeoneDoingSomething() {
    const something = await watchOverSomeoneDoingSomething()
    return something + ' and I watched as well'
}

watchOverSomeoneWatchingSomeoneDoingSomething().then((res) => {
    console.log(res)
})

