console.log("Hello World!");
const http = require("http");
const hostname = "localhost";
const port = 8000;
// creating a server
const server = http.createServer((req, res) => {
  // res.statusCode = `200`;
  // res.setHeader("Content-type", "text/plain");
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello!");
});
//listening to a server
server.listen(port, hostname, () => {
  console.log("Server started at port", port);
});
