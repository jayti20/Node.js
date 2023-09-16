// 1st way :

const http = require("http");
const fs = require("node:fs");

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/html" });
//   res.end("<h3>Welcome home!</h3>");
// });
// server.listen(8000, "localhost", () => {
//   console.log("Listening to port 8000");
// });

//2nd way :

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  const fileContents = fs.readFileSync("index.html", "utf-8");
  console.log(fileContents);
  res.end(fileContents);
});
server.listen(8000, "localhost", () => {
  console.log("Listening to port 8000");
});
