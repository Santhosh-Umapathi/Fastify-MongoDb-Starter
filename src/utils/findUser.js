//Model
const { User } = require("../models");
//Utils
const { logError } = require("./console");

const findUserById = async (userId, reply) => {
  try {
    const user = await User.findById(userId);

    if (!user) {
      throw reply.status(500).send({ message: "Error, User not found" });
    }
    return user;
  } catch (error) {
    logError("Find User", JSON.stringify(error));

    throw reply
      .status(500)
      .send({ message: "Error, fetching the user", error });
  }
};

module.exports = {
  findUserById,
};
