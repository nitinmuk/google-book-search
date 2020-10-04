const router = require("express").Router();
const Book = require("../models/book.js");
const path = require("path");
const axios = require("axios");
require("dotenv").config();

/**
 * route to search books using google book API
 */
router.get("/api/search/books", async ({ query }, response) => {
  try {
    const searchText = query.searchText.replace(/ /g, "+");
    const googleApiKey = process.env.GOOGLE_API_KEY;
    const booksResponse = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${searchText}&projection=lite&key=${googleApiKey}`
    );
    response.json(booksResponse.data.items);
  } catch (error) {
    console.log("Error", error);
    response.status(500).end();
  }
});

/**
 * route to save book in database.
 */
router.post("/api/books", async ({ body }, response) => {
  try {
    await Book.create(body);
    response.status(201).end();
  } catch (error) {
    console.log("Error", error);
    response.status(404).end();
  }
});

/**
 * route to get all saved books
 */
router.get("/api/books", async (request, response) => {
  try {
    const dbBooks = await Book.find({});
    response.json(dbBooks);
  } catch (error) {
    console.log("Error", error);
    response.status(404).end();
  }
});

/**
 * route to delete a book using id
 */
router.delete("/api/books/:id", async ({ params }, response) => {
  try {
    await Book.deleteOne({ _id: params.id });
    response.status(204).end();
  } catch (error) {
    console.log("Error", error);
    response.status(500).end();
  }
});

// Send every other request to the React app
router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
