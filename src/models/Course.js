const mongoose = require("mongoose");
//Schema
// const { CourseSchema } = require("../Schemas");

const COLLECTION_NAME = "courses";
const CourseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  title: { type: String, required: true },
  price: { type: Number, required: true },
  releaseYear: { type: String },
});

const CourseModel = new mongoose.model(COLLECTION_NAME, CourseSchema);

module.exports = CourseModel;
