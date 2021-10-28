const mongoose = require("mongoose");

const { Course } = require("../models");
const { logError } = require("../utils/console");

//Get All courses
const getAllCourses = async (req, reply) => {
  try {
    const courses = await Course.find();
    reply.code(200).json({ message: " Success", courses });
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

    reply.code(200).json({ message: "Success", course });
  } catch (error) {
    logError(null, error);
    throw error;
  }
};

//Add New Course
const addCourse = async (req, reply) => {
  const { name, title, price, releaseYear } = req.body;

  try {
    const newCourse = new Course({ name, title, price, releaseYear });
    newCourse.save();
    reply.code(200).json({ message: "Add Success", course: newCourse });
  } catch (error) {
    logError(null, error);
    throw error;
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
    reply.code(200).json({ message: "Update Success", course: updatedCourse });
  } catch (error) {
    logError(null, error);
    throw error;
  }
};

//Delete Course
const deleteCourse = async (req, reply) => {
  const courseId = req.params.id;

  try {
    const response = await Course.findByIdAndDelete(courseId);

    reply.code(200).json({ message: "Delete Success", response });
  } catch (error) {
    logError(null, error);
    throw error;
  }
};

module.exports = {
  getAllCourses,
  getCourse,
  addCourse,
  updateCourse,
  deleteCourse,
};