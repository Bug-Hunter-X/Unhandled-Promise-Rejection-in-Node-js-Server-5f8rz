const http = require('http');

const server = http.createServer((req, res) => {
  doSomethingAsync()
    .then(() => {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Success!');
    })
    .catch(error => {
      console.error('Error:', error);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
    });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

async function doSomethingAsync() {
  const success = Math.random() < 0.5;
  if (success) {
    return Promise.resolve();
  } else {
    return Promise.reject(new Error('Something went wrong!'));
  }
}