// function declaration
function greet(name) {
  console.log(`Hello, ${name}!`);
}
greet("Mesbah");

// function expression
const greet = function (name) {
  console.log(`Hello, ${name}!`);
};
greet("Mesbah");

// arrow function
const greet = (name) => {
    console.log(`Hello, ${name}!`);
    };
greet("Mesbah");

// templete literals
const name = "Mesbah";
const age = 25;
const occupation = "Software Engineer";
console.log(`My name is ${name}, I am ${age} years old and I am a
    ${occupation}.`);

// multiline string
console.log(`${greet('Anik')}, My name is ${name}, 
    I am ${age} years old and I am a
    ${occupation}.`);

// destructuring
const user = {
  namee: "Mesbah",
  agee: 25,
  occupatione: "Software Engineer",
  };
  const { namee, agee, occupatione } = user;
  console.log(`My name is ${namee}, I am ${agee} years old and
    I am a ${occupatione}.`);