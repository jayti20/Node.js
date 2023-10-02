const express = require("express");
const app = express();
const handlebars = require("express-handlebars").create({
  defaultLayout: "main",
});

app.engine("handlebars", handlebars.engine);
app.set("view engine", "handlebars");

app.use(express.static(__dirname + "/public"));
app.get("/", (req, res) => {
  res.render("block", {
    students: [
      {
        name: ["xyz", "abc"],
        rollNo: 20,
        familyInfo: [
          {
            relation: "father",
            name: "vishesh",
            occupation: "engineer",
          },
        ],
        address: {
          home: "bhhsa",
          city: "snsj",
          state: "aha",
          country: "ashhs",
          pincode: 291882,
        },
      },
      {
        name: ["abc", "def"],
        rollNo: 21,
        familyInfo: [
          {
            relation: "father",
            name: "ramesh",
            occupation: "doctor",
          },
        ],
        address: {
          home: "address2",
          city: "city2",
          state: "state2",
          country: "country2",
          pincode: 291883,
        },
      },
      {
        name: ["ghi", "jkl"],
        rollNo: 22,
        familyInfo: [
          {
            relation: "father",
            name: "suresh",
            occupation: "lawyer",
          },
        ],
        address: {
          home: "address3",
          city: "city3",
          state: "state3",
          country: "country3",
          pincode: 291884,
        },
      },
      {
        name: ["mno", "pqr"],
        rollNo: 23,
        familyInfo: [
          {
            relation: "father",
            name: "naresh",
            occupation: "teacher",
          },
        ],
        address: {
          home: "address4",
          city: "city4",
          state: "state4",
          country: "country4",
          pincode: 291885,
        },
      },
      {
        name: ["stu", "vwx"],
        rollNo: 24,
        familyInfo: [
          {
            relation: "father",
            name: "ganesh",
            occupation: "businessman",
          },
        ],
        address: {
          home: "address5",
          city: "city5",
          state: "state5",
          country: "country5",
          pincode: 291886,
        },
      },
    ],
    fees: 100000,
  });
});
app.listen(8000);
