// Function that accepts another function as a parameter
function greetUser(name, callback) {
    console.log(`Hello, ${name}!`);
    callback(); // Execute the callback function
  }
  
  // Callback function
  function displayTime() {
    console.log(`The current time is: ${new Date().toLocaleTimeString()}`);
  }
  
  // Calling the main function and passing the callback
  greetUser("John", displayTime);
  