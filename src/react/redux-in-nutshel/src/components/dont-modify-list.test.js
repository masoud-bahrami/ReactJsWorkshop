const expect = require("expect");
//import expect from "expect";

const addToList = list => {
  //push will modify the list
  // list.push(1);
  // return list;

  //concat will not modify list
  //return list.concat([1]);
  //also we can use spread list feature
  return [...list, 1];
};

const removeFromList = (list, index) => {
  // splice will modify this list
  // list.splice(index, 1);
  // return list;

  //slice will not modify the list, it return a new list
  // return list.slice(0, index)
  // .concat(list.slice(index + 1));

  //also we can use spread list feature
  return [...list.slice(0, index), ...list.slice(index + 1)];
};

const modifyList = (list, index) => {
  //direct access to element will modify the list
  // list[index]++;
  // return list;

  return list
    .slice(0, index)
    .concat(list[index] + 1)
    .concat(list.slice(index + 1));

  //    return [...list.slice(0, index) , list[index] + 1 , ...list.slice(index + 1)];
};

const testAddToList = () => {
  const listBefore = [];
  const listAfter = [1];

  Object.freeze(listBefore);
  expect(addToList(listBefore)).toEqual(listAfter);
};

const testRemoveFromList = () => {
  const listBefore = [1, 2, 3];
  const listAfter = [1, 3];

  Object.freeze(listBefore);
  expect(removeFromList(listBefore, 1)).toEqual(listAfter);
};

const testModifyList = () => {
  const listBefore = [1, 2, 3];
  const listAfter = [1, 2, 4];

  Object.freeze(listBefore);
  expect(modifyList(listBefore, 2)).toEqual(listAfter);
};

testAddToList();
testRemoveFromList();
testModifyList();
console.log("Test passed!");
