const mongoose = require("mongoose");

const ResponseScehma = new mongoose.Schema(
  {
    fname: String,
    email: { type: String, unique: true },
    query: String,
    date : Date,
  },
  {
    collection: "ResponseDb",
  }
);

mongoose.model("ResponseDb", ResponseScehma);