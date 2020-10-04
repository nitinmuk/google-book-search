const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const AuthorSchema = new Schema({
  name: {
    type: String,
    trim: true
  }
});
const BookSchema = new Schema({
  title: {
    type: String,
    trim: true
  },
  subtitle: {
    type: String,
    trim: true
  },
  authors: [AuthorSchema],
  description: String,
  image: {
    type: String,
    trim: true
  },
  link: {
    type: String,
    trim: true
  },
  averageRating: Number
});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;
