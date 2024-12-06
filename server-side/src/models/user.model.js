import { Schema, model } from "mongoose";

// create a schema => shapes and set rules for the inserted data
const userSchema = new Schema({
  username: {
    type: String,
    // required: true,
    // unique: true,
  },
  password: {
    type: String,
    // required: true,
  },
  age: {
    type: Number,
    // required: false,
    // default: 0,
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
});

// create a model from the schema => resembles a collection in the db
export const User = model("User", userSchema);
