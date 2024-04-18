let express = require("express");
require("./models/todo");
let port = process.env.PORT || 3000;
let path = require("path");
let api = express();

api.set("view engine");

api.set("views", path.resolve(__dirname + "/views"));
api.use(express.static(path.resolve(__dirname + "/public")));
console.log(path.resolve(__dirname + "/public"));

let student = { name: "jon", age: 20, city: "hyd" };

api.get("/", (req, res) => {
  res.render("index.ejs", { student: student });
});

api.get("/about", (req, res) => {
  res.render("about");
});

api.listen(port, () => {
  console.log(port);
});
