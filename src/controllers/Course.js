const mongoose = require("mongoose");

const { Course } = require("../models");
const { logError } = require("../utils/console");

//Get All courses
const getAllCourses = async (req, reply) => {
  try {
    const courses = await Course.find();
    reply.status(200).send({ message: "Success", courses });
  } catch (error) {
    logError(null, error);
    throw error;
  }
};

//Get Single course
const getCourse = async (req, reply) => {
  const courseId = req.params.id;

  try {
    const course = await Course.findById(courseId);
    if (!course) {
      reply.status(500).send({ message: "Error, Course Not found" });
    }
    reply.status(200).send({ message: "Success", course });
  } catch (error) {
    logError(null, error);
    reply.status(500).send({ message: "Error, Course Not found", error });
  }
};

//Add New Course
const addCourse = async (req, reply) => {
  const { name, title, price, releaseYear } = req.body;

  try {
    const newCourse = new Course({ name, title, price, releaseYear });
    newCourse.save();
    reply.status(200).send({ message: "Success", course: newCourse });
  } catch (error) {
    logError(null, error);
    reply.status(500).send({ message: "Error, Adding new course", error });
  }
};

//Update Course
const updateCourse = async (req, reply) => {
  const { id: courseId, name, title, price, releaseYear } = req.body;

  try {
    const updatedCourse = await Course.findByIdAndUpdate(
      courseId,
      {
        name,
        title,
        price,
        releaseYear,
      },
      { new: true }
    );
    reply.status(200).send({ message: "Success", course: updatedCourse });
  } catch (error) {
    logError(null, error);
    reply.status(500).send({ message: "Error, Updating course", error });
  }
};

//Delete Course
const deleteCourse = async (req, reply) => {
  const courseId = req.params.id;

  try {
    const response = await Course.findByIdAndDelete(courseId);
    reply.status(200).send({ message: "Success", response });
  } catch (error) {
    logError(null, error);
    reply.status(500).send({ message: "Error, Deleting course", error });
  }
};

module.exports = {
  getAllCourses,
  getCourse,
  addCourse,
  updateCourse,
  deleteCourse,
};
