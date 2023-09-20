const http = require("http");

http
  .createServer((req, res) => {
    const path = req.url;
    switch (path) {
      case "/":
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Home Page");
        break;
      case "/about":
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("About Page");
        break;
      default:
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Page not found!!!!");
    }
  })
  .listen(8000);
