const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const BookSchema = new Schema({
  title: {
    type: String,
    trim: true
  },
  subtitle: {
    type: String,
    trim: true
  },
  authors: [String],
  description: String,
  image: {
    type: String,
    trim: true
  },
  link: {
    type: String,
    trim: true
  }
});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;
