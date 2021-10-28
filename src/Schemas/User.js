const mongoose = require("mongoose");
//Schema
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  courses: [{ type: mongoose.Types.ObjectId, ref: "courses" }],
});

UserSchema.set("toJSON", { virtuals: true });

module.exports = UserSchema;
