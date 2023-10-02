const express = require("express");
const app = express();
const handlebars = require("express-handlebars").create({
  defaultLayout: "main",
});
app.engine("handlebars", handlebars.engine);
app.set("view engine", "handlebars");
app.use(express.static(__dirname + "/public"));
const userlist = [
  { id: 1, username: "Samuel" },
  { id: 2, username: "Clark" },
  { id: 3, username: "Luke" },
  { id: 4, username: "Lorelai" },
  { id: 5, username: "Alex" },
];
app.get("/userlist", (req, res) => {
  res.render("user", { userlist });
});

app.listen(8000);
