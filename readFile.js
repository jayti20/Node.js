const fs = require("fs");
const http = require("http");
const hostname = "localhost";
const portname = 8000;
console.log("First");
const fileContents = fs.readFileSync("./newFile.txt", "utf8");
console.log(fileContents);
console.log("Second");
fs.readFile("index.html", (err, contentsOfTheFile) => {
  if (err) throw err;
  else {
    const server = http.createServer((req, res) => {
      res.statusCode = 200;
      res.setHeader("Content-type", "text/html");
      res.end(contentsOfTheFile);
    });
    server.listen(portname, hostname, () => {
      console.log("Listening to the server at port", portname);
    });
  }
});
console.log("Third");
