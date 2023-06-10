const mongoose = require("mongoose");

const JobScehma = new mongoose.Schema(
  {
    title: String,
    description: String,
  },
  {
    collection: "JobDb",
  }
);

mongoose.model("JobDb", JobScehma);