const express = require('express'),
path = require('path'),
bodyParser = require('body-parser'),
cors = require('cors');

const submitData = require('./routes/submitData');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(cors());

app.use('/submit', submitData);

const port = process.env.PORT || 4003;

const server = app.listen(port, function(){
    console.log('Listening on port ' + port);
});