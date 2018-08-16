// load net library
const net = require("net");
// load fs library
const fs = require("fs");

// create server
const server = net.createServer(socket => {
  console.log(
    "connection from : " +
      socket.remoteAddress +
      " and port : " +
      socket.remotePort
  );

  // To append data to the existing file (need to FIX)
  // socket.on("data", data => {
  //   console.log(data);
  //   filepath = "./files/test.txt";
  //   fs.exists(filepath, exists => {
  //     if (!exists) {
  //       fs.writeFile(filepath, data, err => {
  //         if (err) {
  //           return console.log(err);
  //         }
  //         console.log("File was saved");
  //       });
  //     }
  //     fs.appendFileSync(filepath, data);
  //   });
  // });

  socket.on("data", data => {
    console.log(data);
    fs.writeFileSync("./files/test.txt", data);
    console.log("File was saved");
  });

  socket.once("close", () => {
    console.log("Connection is closed");
  });

  socket.on("error", err => {
    console.log(err.message);
  });
});

// listen to server port XXXX
server.listen(9000, () => {
  console.log("Listening on port 9000");
});
