let mongoose = require("mongoose");

const { Schema } = mongoose;

const Person = new Schema({
  name: String,
  age: Number,
  favoriteFoods: [String],
  required: Boolean,
  unique: Boolean,
  lowercase: Boolean,
});
module.exports = mongoose.model("Person", Person);
