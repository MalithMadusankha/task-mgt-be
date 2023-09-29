const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//Database Schema
const UserSchema = new Schema(
  {
    email: { type: String, required: true },
    firebaseId: { type: String },
    type: { type: String },
    userId: { type: String },
    username: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: Number, required: true, maxlength: 10 },
    birthday: { type: Date, required: true },
    position: { type: String },
    gender: { type: String },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
