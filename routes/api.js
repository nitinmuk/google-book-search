const router = require("express").Router();
const Book = require("../models/book.js");
const path = require("path");

// Send every other request to the React app
// Define any API routes before this runs
router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

module.exports = router;
