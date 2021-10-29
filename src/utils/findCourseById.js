//Model
const { Course } = require("../models");
//Utils
const { logError } = require("./console");

const findCourseById = async (courseId, reply) => {
  try {
    const course = await Course.findById(courseId);

    if (!course) {
      throw reply.status(500).send({ message: "Error, Course not found" });
    }
    return course;
  } catch (error) {
    logError("Find Course", JSON.stringify(error));

    throw reply
      .status(500)
      .send({ message: "Error, fetching the course", error });
  }
};

module.exports = {
  findCourseById,
};
