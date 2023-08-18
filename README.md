# Revise_JavaScript-concept
revise javascript concept like loop, switch case, datatype , condition , operator, variables, promises, callback, basic array, Dom manipulation, syn/asyn
In JavaScript, promises are a way to handle asynchronous operations. Asynchronous operations in JavaScript are tasks that take some time to complete,
such as fetching data from a server,reading a file, or making an API call. These operations are non-blocking, meaning the program does not wait for them to complete before moving on to
the next line of code.Promises provide a clean and structured way to work with asynchronous code and make it more manageable. They allow you to define the flow of the asynchronous operation and handle success or failure once the operation is completed.
A promise represents a value that may not be available yet but will be resolved (fulfilled) or rejected at some point in the future. It has three possible states:

**Pending**: The initial state when the promise is created, and the asynchronous operation is still in progress.
**Fulfilled**: The promise is resolved successfully, and the result (the value) is available.
**Rejected**: The promise encountered an error or failed, and the reason for the failure is available.
The syntax for creating a promise in JavaScript is as follows:

# javascript

const myPromise = new Promise((resolve, reject) => {

  // Asynchronous operation (e.g., API call, file reading, etc.)
  
  // If successful, call resolve(value)
  
  // If there's an error, call reject(error)
  
});

**Here's a brief overview of how to use promises:**

 **Creating a Promise**: You create a new Promise object, and the executor function receives two parameters, resolve and reject. You perform the asynchronous operation inside the executor function, and when it's done, you call resolve(value) with the result or reject(error) if there was an error.

**Handling the Promise**: You can attach .then() and .catch() methods to the promise to handle the resolved or rejected states respectively.

.then(onFulfilled): This method is called when the promise is fulfilled (resolved) successfully. You pass a callback function onFulfilled that takes the resolved value as an argument.
.catch(onRejected): This method is called when the promise is rejected (failed). You pass a callback function onRejected that takes the reason for the rejection as an argument.
Chaining Promises: Promises can be chained together using .then() to create a sequence of asynchronous operations.
