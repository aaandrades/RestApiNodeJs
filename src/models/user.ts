import mongoose, { Schema } from "mongoose";
import { validRols } from "../utils/rolesTypeEnums";
import { IUser } from "../utils/user.interface";

// Import in typescript isn't working, TODO: Change require to import.
const mongooseUniqueValidator = require("mongoose-unique-validator");

let userSchema = new Schema({
  name: {
    type: String,
    required: [true, "The name its mandatory"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "The Email its mandatory"],
  },
  password: {
    type: String,
    required: [true, "The password its mandatory"],
  },
  img: {
    type: String,
    required: false,
  },
  role: {
    type: String,
    default: "USER_ROLE",
    required: false,
    enum: validRols,
  },
  state: {
    type: Boolean,
    default: true,
    required: false,
  },
  google: {
    type: Boolean,
    default: false,
    required: false,
  },
});

// Validate that email must be unique
userSchema.plugin(mongooseUniqueValidator, {
  message: "{PATH} must be unique.",
});

// Create and export a model using IUser interface
export const UserModel = mongoose.model<IUser>("Users", userSchema);
