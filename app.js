const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config/database');

mongoose.connect(config.database);

mongoose.connection.on('connected', () => {
	console.log('connected to db' + config.database);
});

mongoose.connection.on('error', (error) => {
	console.log('error db' + error);
});

const app = express();

const generate = require('./routes/generate');
const port = 3000;

app.use(cors());
app.use(express.static(path.join(__dirname, 'bower_components')));
// allows app to get static files for front end stuff
app.use(express.static(path.join(__dirname, 'public')))

app.use(bodyParser.json());

app.use('/generate', generate);

app.get('/', (req, res) => {
	res.send("invalid endpoint");
});
app.listen(port, () => {
	console.log("server started on " + port);
});