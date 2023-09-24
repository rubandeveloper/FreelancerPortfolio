const express = require("express");
const app = express();
const { PORT, MONGO_URI } = require("./config/key");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path")

require('dotenv').config();


app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
/* -----production-----*/

app.use(express.static('./frontend/build'))
app.get("*", async (req, res) => {
  res.set('Cross-Origin-Opener-Policy', 'same-origin');
  res.sendFile(path.join(__dirname, './frontend/build', 'index.html'))
})

//PORT
app.listen(PORT, (err) => {
  if (err) {
    console.log("Server Error" + err);
  } else {
    console.log("Server in running on port: " + PORT);
  }
});
