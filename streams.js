const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
  //Sol 1
  //// Node has to load entire file-> only use in dev and small files
  // fs.readFile('test-file.txt', (err, data) => {
  //   if (err) console.log(err);
  //   res.end(data);
  // });

  // Sol 2: Streams -> Issue: back pressure (Response can't send data as fast as it is receiving it)
  // const readable = fs.createReadStream('test-file.txt');
  // readable.on('data', chunk => {
  //   //res sends data in "chunks"
  //   res.write(chunk);
  // });
  // readable.on('end', () => {
  //   //all data has already been sent
  //   res.end();
  // });
  // readable.on('error', err => {
  //   console.log(err);
  //   res.statusCode = 500;
  //   res.end("File not found");
  // })


  // Sol 3
  const readable = fs.createReadStream("test-file.txt");
  readable.pipe(res);
  // readableSource.pipe(writeableDest)
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Listening...');
});