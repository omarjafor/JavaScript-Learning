const promise = new Promise((pending, resolve, reject) => {
    // Asynchronous operation
    if (success) {
      resolve("Operation successful!");
    } else {
      reject("Operation failed!");
    }
  });
  
  const fetchData = new Promise((resolve, reject) => {
    const success = true; // Simulating success
    setTimeout(() => {
      if (success) {
        resolve("Data fetched successfully!");
      } else {
        reject("Error fetching data!");
      }
    }, 2000);
  });
  
  fetchData
    .then((data) => console.log(data)) // Executes on success
    .catch((error) => console.log(error)); // Executes on failure
  

// Without Promises (Callback Hell)