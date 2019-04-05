var express = require('express');
var app = express();
var routes = express.Router();

routes.route('/form').post(function (req, res) {
  console.log("dapat");
  console.log(req.body);
  res.json(req.body);
});

module.exports = routes;