var express = require("express");
var app = express();

app.set("port", 8000);

app.get("/", (req, res) => {
  res.status(200);
  res.type("text/plain");
  res.send("Home Page");
});

app.get("/about/other", (req, res) => {
  res.status(200);
  res.type("text/plain");
  res.send("Other Page");
});

app.get("/about*", (req, res) => {
  res.status(200);
  res.type("text/plain");
  res.send("About Page");
});

app.use((req, res) => {
  res.status(404);
  res.type("text/plain");
  res.send("Page not found!!!");
});

app.listen(8000, () => {
  console.log("Listening", 8000);
});
