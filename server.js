const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");

const app = express();

const PORT = process.env.PORT || 3001;