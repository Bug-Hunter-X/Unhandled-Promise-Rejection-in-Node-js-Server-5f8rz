# Unhandled Promise Rejection in Node.js Server

This repository demonstrates a common error in Node.js applications: unhandled promise rejections in asynchronous operations within an HTTP server.  The server simulates an asynchronous task that can randomly fail. Without proper error handling, these failures go unnoticed, potentially leading to application instability or data corruption.

## Bug

The `bug.js` file showcases a Node.js HTTP server with an asynchronous operation (`doSomethingAsync`). This operation can either resolve successfully or reject with an error.  However, the code lacks comprehensive error handling for the rejected promise.  This means that if `doSomethingAsync` rejects, the error is logged to the console but isn't handled gracefully, potentially affecting the server's responsiveness or causing it to crash under heavy load.

## Solution

The `bugSolution.js` file provides a corrected version.  It properly handles the potential rejection of the promise using a `.catch` block within the server's request handler. This ensures that errors are caught, logged appropriately, and a suitable response (e.g., an error status code) is sent back to the client, preventing silent failures.

## How to run

1. Clone the repository.
2. Navigate to the repository's directory.
3. Run `node bug.js` (to see the bug) or `node bugSolution.js` (to see the solution) from the command line. 