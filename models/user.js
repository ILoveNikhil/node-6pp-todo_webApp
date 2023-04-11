import mongoose from "mongoose";

//   Schema

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    // unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

//   user Schema

export const User = mongoose.model("Users", schema);
