const books = require("./src/v1/routes/books");
const connection = require("./db");
const express = require("express");
const app = express();
const cors = require("cors");

connection();

app.use(express.json());
app.use(cors());
app.use("/api/books", books);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
})