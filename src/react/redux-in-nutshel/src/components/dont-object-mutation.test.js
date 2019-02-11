const expect = require("expect");
//import expect from "expect";

const setUserStatus = user => {
  //object is refrence type. and this modify object
  // user.isActive = !user.isActive;
  // return user;

  //create a new object will not modify state, but it violates OCP
  // return {
  //   id: user.id,
  //   name: user.name,
  //   isActive: !user.isActive
  // };

  //object.assign will create a ner object
  // return Object.assign({}, user,     { isActive: !user.isActive });

  //also we can use object spread
  return { ...user, isActive: !user.isActive };
};

const testUseStatus = () => {
  const userBefore = {
    id: 0,
    name: "Masoud",
    isActive: false
  };

  const userAfter = {
    id: 0,
    name: "Masoud",
    isActive: true
  };

  Object.freeze(userBefore);
  expect(setUserStatus(userBefore)).toEqual(userAfter);
};

testUseStatus();

console.log("Test Passed!");
