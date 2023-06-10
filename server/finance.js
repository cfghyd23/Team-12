const mongoose = require("mongoose");

const FinanceScehma = new mongoose.Schema(
  {
    title: String,
    description: String,
  },
  {
    collection: "FinanceDb",
  }
);

mongoose.model("FinanceDb", FinanceScehma);