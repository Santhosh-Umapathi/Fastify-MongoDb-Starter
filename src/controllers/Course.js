const mongoose = require("mongoose");
//Model
const { Course } = require("../models");
//Utils
const { logError, logInfo } = require("../utils/console");
const { findUserById } = require("../utils/findUser");

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

//Add New Course & Add to user
const addCourse = async (req, reply) => {
  const { name, title, price, releaseYear, creator } = req.body;

  const createdUser = await findUserById(creator, reply);

  try {
    let newCourse = new Course({
      name,
      title,
      price,
      releaseYear,
      creator,
    });

    const session = await mongoose.startSession();

    await session.withTransaction(async () => {
      await newCourse.save();
      createdUser.courses.push(newCourse); //Adding item to an array
      await createdUser.save();
    });

    reply.status(200).send({ message: "Success", course: newCourse });
  } catch (error) {
    logError("Add Course", error);
    reply.status(500).send({ message: "Error, Adding new course", error });
  }
};

//Update Course
const updateCourse = async (req, reply) => {
  const { id: courseId, name, title, price, releaseYear } = req.body;
  //Need to check created user with token data

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

//Delete Course & Delete from user
const deleteCourse = async (req, reply) => {
  const courseId = req.query.id;
  const creator = req.query.creator;

  //Need to check created user with token data
  const createdUser = await findUserById(creator, reply);

  try {
    const session = await mongoose.startSession();
    await session.withTransaction(async () => {
      await Course.findByIdAndDelete(courseId);
      await createdUser.courses.pull(courseId);
      await createdUser.save();
    });

    reply.status(200).send({ message: "Success" });
  } catch (error) {
    logError("Delete course", error);
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
