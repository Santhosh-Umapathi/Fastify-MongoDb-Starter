const mongoose = require("mongoose");
//Schema
const CourseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  title: { type: String, required: true },
  price: { type: Number, required: true },
  releaseYear: { type: Number },
});

module.exports = CourseSchema;
