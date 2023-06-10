const mongoose = require("mongoose");

const HealthScehma = new mongoose.Schema(
  {
    title: String,
    description: String,
  },
  {
    collection: "HealthDb",
  }
);

mongoose.model("HealthDb", HealthScehma);