var env = process.env.NODE_ENV || "development";
var config = require("./config")[env];

const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const hostname = config.server.host;
const port = config.server.port;

app.post("/", (req, res) => {
  console.log(req.body);
  res.sendStatus(200);

  axios
    .get("https://reqres.in/api/products/3")
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error.response);
    });
});

app.listen(1337, function(){
  console.log('Express listening on port', this.address().port);
});
