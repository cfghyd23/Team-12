const mongoose = require("mongoose");

const CardScehma = new mongoose.Schema(
  {
    title: String,
    description: String,
  },
  {
    collection: "CardSchemaDb",
  }
);

mongoose.model("CardSchemaDb", CardScehma);