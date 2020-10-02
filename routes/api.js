const router = require("express").Router();
const Book = require("../models/book.js");
const path = require("path");

/**
 * route to save book in database.
 */
router.post("/api/books", async ({ body }, response) => {
  try {
    await Book.create(body);
    response.status(201).end();
  } catch (error) {
    console.log(error);
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
    console.log(error);
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
    console.log(error);
    response.status(500).end();
  }
});

// Send every other request to the React app
router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
