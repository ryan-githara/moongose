require('dotenv').config();
const express = require('express');
const app = express();
const myApp = require('./myApp.js');

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/is-mongoose-ok", (req, res) => {
  if (myApp.isMongooseOk) {
    res.json({ isMongooseOk: !!myApp.isMongooseOk });
  } else if (myApp.PersonModel) {
    res.json({ isMongooseOk: true });
  } else {
    res.json({ isMongooseOk: false });
  }
});

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log("Your app is listening on port " + listener.address().port);
  console.log("Connected! File loaded ok");
});