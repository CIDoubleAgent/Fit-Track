const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended:true }));
app.use(express.json());

const PORT = process.env.PORT || 3001;

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/fit-track-database',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );

app.listen(PORT, () => {
    console.log(`Now listening on port ${PORT}`);
});