const http = require("http");
const server = http.createServer((req, res) => {
  const superHero = { firstName: "Bruce", lastName: "Wayne" };
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(superHero));
});
server.listen(8000, "localhost", () => {
  console.log("Listening to port 8000");
});
