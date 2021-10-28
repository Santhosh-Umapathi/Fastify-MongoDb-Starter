const mongoose = require("mongoose");
//Schema
const { CourseSchema } = require("../Schemas");

const COLLECTION_NAME = "courses";

const CourseModel = new mongoose.model(COLLECTION_NAME, CourseSchema);

module.exports = CourseModel;
