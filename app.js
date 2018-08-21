// Attempt to read stream of data
// Then store in NoSQL database

// load net library
const net = require("net");
// load fs library
const fs = require("fs");

// create server
const server = net.createServer(socket => {
  let data;
  socket.on("data", rawData => {
    console.log(
      `Receiving data from : ${socket.remoteAddress} Port : ${
        socket.remotePort
      }`
    );
    console.log(rawData);
  });

  socket
    .on("close", () => {
      console.log("File was saved");
    })

    .on("error", err => {
      console.log(err.message);
    });
});

// listen to server port XXXX
server.listen(9000, () => {
  console.log("Listening on port 9000");
});
