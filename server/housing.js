const mongoose = require("mongoose");

const HousingScehma = new mongoose.Schema(
  {
    title: String,
    description: String,
  },
  {
    collection: "HousingDb",
  }
);

mongoose.model("HousingDb", HousingScehma);