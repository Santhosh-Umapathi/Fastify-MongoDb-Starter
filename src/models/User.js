const mongoose = require("mongoose");
//Schema
const { UserSchema } = require("../schemas");
//Collection Name
const COLLECTION_NAME = "users";

const UserModel = mongoose.model(COLLECTION_NAME, UserSchema);

module.exports = UserModel;
