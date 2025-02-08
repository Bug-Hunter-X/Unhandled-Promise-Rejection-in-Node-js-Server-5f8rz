const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate an asynchronous operation that might fail
  doSomethingAsync().then(() => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Success!');
  }).catch(error => {
    //This is where the error handling is missing
    console.error('Error:', error);
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

async function doSomethingAsync() {
  // Simulate an asynchronous operation that might fail randomly
  const success = Math.random() < 0.5; // 50% chance of failure
  if (success) {
    return Promise.resolve();
  } else {
    return Promise.reject(new Error('Something went wrong!'));
  }
}