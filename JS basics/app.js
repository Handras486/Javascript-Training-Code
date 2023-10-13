// variables => let and const
// var is outdated

function greet(name) {
  console.log("Hello there " + name);
}
greet("Bob");
// function default return = undefined

// function expression
// name of function optional
const add = function (num1, num2) {
  return num1 + num2;
};
const test = add(5, 6);

//array can hold any type
const values = [test, add(4, 10), "test", 45];
console.log(values);

// function expression used with arrow functions( Javascript ES6+)
// (C# lambda)
const multiply = (num1, num2) => num1 * num2;

// object - key/value pair methods
const person = {
  name: "John",
  age: 40,
  married: true,
  siblings: ["Susan", "Peter"],
  //pre ES6
  greeting1: function () {
    console.log("1. Hello ,my name is " + this.name);
  },
  //post ES6
  greeting2() {
    console.log("2. Hello ,my name is " + this.name);
  },
};
console.log(person.age);
person.greeting1();
person.greeting2();

// == checks only value
// === checks value and type

//template literals
// `` - altgr + 7 - backtick
// interpolation => ${} only in backtick strings
const value = `asdasd ${test}`;
console.log(value);

value.concat("asd"); // add values to end
values.unshift("asd"); // add value to beginning
values.shift(); // remove first value
values.push(); //same as above but at the end
values.pop();

//console log objects
console.log({
  test1: 6 + 4,
  test2: 778,
  test3: "asdasd",
});

//primitive data type
const number1 = 1;
let number2 = number1;
number2 = 7;
console.log(`${number1} and ${number2} different => direct assign`);
//non-primitive data type
let person1 = { name: "Bob" };
let person2 = person1;
person2.name = "Bill";
console.log(`${person1.name} and ${person2.name} same => assign by reference`);
//Copy values ES6+
let person3 = { ...person1 };

// null set by developer
console.log(20 + null); // null = 0 in this case
// undefined set by js
console.log(20 + undefined); //throws NaN

// truthy, falsy values
//falsy values: "",'',0,-0,NaN,false,null,undefined
//everything else truthy

//callback function
function morning(name) {
  return `Good morning ${name}`;
}
//higher order function
function greetings(name, callback) {
  const myName = "Bob";
  console.log(`${callback(name)}, my name is ${myName}`);
}
greetings("John", morning);

//dynamic property on object
const subject = "art";
const total = {};
total[subject] = "value";
console.log(total);

// array .foreach, .map, .filter, .find, .reduce
const students = [
  { name: "asd", favsubject: "math" },
  { name: "asd2", favsubject: "math" },
  { name: "asd3", favsubject: "history" },
  { name: "asd4", favsubject: "art" },
];
const survey = students.reduce((survey, student) => {
  if (survey[student.favsubject]) {
    survey[student.favsubject] += 1;
  } else {
    survey[student.favsubject] = 1;
  }
  return survey;
}, {});
console.log(survey);
