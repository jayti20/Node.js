const fs = require("fs");
const http = require("http");
const hostname = "localhost";
const portname = 8000;
fs.writeFileSync("./newFile.txt", "Welcome to my web page");
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  // res.setHeader("Content-type", "text/plain");
  res.end("Hello!");
});
fs.writeFile("./newFile.txt", ", Jayti!", { flag: "a" }, (err) => {
  if (err) throw err;
  else {
    server.listen(portname, hostname, () => {
      console.log("Hurrah!");
      console.log("Listening to the server at port ", portname);
    });
  }
});
