const mongoose = require("mongoose");
//Schema
const { CourseSchema } = require("../schemas");
//Collection Name
const COLLECTION_NAME = "courses";

const CourseModel = mongoose.model(COLLECTION_NAME, CourseSchema);

module.exports = CourseModel;
