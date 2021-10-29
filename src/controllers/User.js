const mongoose = require("mongoose");
//Model
const { User } = require("../models");
//Utils
const { logError, logInfo } = require("../utils/console");
const { findUserById } = require("../utils/findUser");
const { findCourseById } = require("../utils/findCourseById");

//Get All Users
const getAllUsers = async (req, reply) => {
  try {
    const users = await User.find();
    reply.status(200).send({ message: "Success", users });
  } catch (error) {
    logError(null, error);
    reply.status(500).send({ message: "Error, Users Not found", error });
  }
};

//Get Single User
const getUser = async (req, reply) => {
  const userId = req.params.id;

  try {
    const user = await User.findById(userId);
    if (!user) {
      reply.status(500).send({ message: "Error, User Not found" });
    }
    reply.status(200).send({ message: "Success", user });
  } catch (error) {
    logError(null, error);
    reply.status(500).send({ message: "Error, User Not found", error });
  }
};

//Add New User
const addUser = async (req, reply) => {
  const { name, email, password } = req.body;

  try {
    let newUser = new User({
      name,
      email,
      password,
    });

    newUser.save();

    reply.status(200).send({ message: "Success", user: newUser });
  } catch (error) {
    logError(null, error);
    reply.status(500).send({ message: "Error, Adding new user", error });
  }
};

//Update User
const updateUser = async (req, reply) => {
  const { id: userId, name, email } = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        name,
        email,
      },
      { new: true }
    );
    reply.status(200).send({ message: "Success", user: updatedUser });
  } catch (error) {
    logError(null, error);
    reply.status(500).send({ message: "Error, Updating user", error });
  }
};

//Delete User & his Courses
const deleteUser = async (req, reply) => {
  const userId = req.query.id;

  const user = await findUserById(userId, reply);

  try {
    const session = await mongoose.startSession();
    await session.withTransaction(async () => {
      user.courses.forEach(async (course) => {
        const courseFound = await findCourseById(course, reply);
        await courseFound.remove();
      });
      await User.findByIdAndDelete(userId);
    });

    reply.status(200).send({ message: "Success" });
  } catch (error) {
    logError("Delete User", error);
    reply.status(500).send({ message: "Error, Deleting user", error });
  }
};

module.exports = {
  getAllUsers,
  getUser,
  addUser,
  updateUser,
  deleteUser,
};
