const app = require("express")();
const mongoose = require("mongoose");

app.get("/messages", (req, res) => {
  Message.find({}, (err, messages) => {
    res.send(messages);
  });
});
