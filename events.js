const EventEmitter = require('events');
const http = require('http');

// const myEmitter = new EventEmitter();

class Sales extends EventEmitter {
  constructor() {
    super();
  }
}

const myEmitter = new Sales();

myEmitter.on('newSale', () => {
  console.log('There was a new sale');
})

myEmitter.on('newSale', () => {
  console.log('Costumer name: Tim');
})

myEmitter.on('newSale', stock => {
  console.log('there are now 9 items left in stock')
})

myEmitter.emit('newSale', 9);

///////////

const server = http.createServer();

server.on('request', (req, res) => {
  console.log('Request recieved 1');
  console.log(req.url);
  res.end('Request Recieved');
});

server.on('request', (req, res) => {
  console.log('Request recieved 2')
});

server.on('close', () => {
  console.log('Server closed');
});

server.listen(8000, "127.0.0.1", () => {
  console.log('Waiting for requests ....');
});