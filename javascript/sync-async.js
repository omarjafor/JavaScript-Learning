// synchronous way of reading a file
console.log("first");
console.log("second");
// const result = readFileSync('data.txt', 'utf8');
// console.log(result);
console.log("third");
console.log("fourth");
console.log("fifth");

// asynchronous way of reading a file
console.log("Start");
setTimeout(() => {
  console.log("Inside setTimeout");
//   const result = readFileSync("data.txt", "utf8");
//   console.log(result);
}, 2000);
console.log("End");
