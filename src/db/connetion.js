let mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/jon")
  .then(() => {
    console.log("connected");
  })
  .catch((e) => {
    console.log(e);
  });

let schema = mongoose.Schema({
  name: String,
  age: Number,
  city: String,
});

let model = new mongoose.model("test", schema);

module.exports = model;
