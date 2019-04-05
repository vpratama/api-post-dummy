const express = require('express'),
os = require('os'),
formData = require('express-form-data'),
cors = require('cors');

const submitData = require('./routes/submitData');

const options = {
    uploadDir: os.tmpdir(),
    autoClean: true
}

const app = express();
app.use(formData.parse(options));
app.use(formData.format());
app.use(formData.stream());
app.use(formData.union());
app.use(cors());

app.use('/submit', submitData);

const port = process.env.PORT || 4003;

const server = app.listen(port, function(){
    console.log('Listening on port ' + port);
});