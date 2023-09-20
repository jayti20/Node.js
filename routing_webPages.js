const http = require("http");
const fs = require("node:fs");

function serveStaticFile(res, path, contentType) {
  fs.readFile(__dirname + path, (err, data) => {
    if (err) throw err;
    else {
      res.writeHead(200, { contentType });
      res.end(data);
    }
  });
}
http
  .createServer((req, res) => {
    const path = req.url;
    switch (path) {
      case "/":
        serveStaticFile(res, "/home.html", "text/html");
        break;
      case "/about":
        serveStaticFile(res, "/about.html", "text/html");
        break;
      default:
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("<h1>Page not found</h1>");
        break;
    }
  })
  .listen(8000);
