const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");

const app = express();

app.use(express.static("public"));

const PORT = process.env.PORT || 3001;

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/fit-track-database"

app.listen(PORT, () => {
    console.log(`Now listening on port ${PORT}`);
});