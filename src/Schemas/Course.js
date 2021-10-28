const mongoose = require("mongoose");
//Schema
const CourseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  title: { type: String, required: true },
  price: { type: Number, required: true },
  releaseYear: { type: Number },
  creator: { type: mongoose.Types.ObjectId, required: true, ref: "users" },
});

CourseSchema.set("toJSON", { virtuals: true });

module.exports = CourseSchema;
