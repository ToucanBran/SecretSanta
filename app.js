const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config/database');
const santas = require('./routes/santas');
const index = require('./routes/index');

// mongoose.connect(config.database);

// mongoose.connection.on('connected', () => {
// 	console.log('connected to db' + config.database);
// });

// mongoose.connection.on('error', (error) => {
// 	console.log('error db' + error);
// });

const app = express();


const port = 3000;

app.use(cors());
app.use(express.static(path.join(__dirname, 'bower_components')));
// allows app to get static files for front end stuff
app.use(express.static(path.join(__dirname, 'public')))

app.use(bodyParser.json());

app.use('/index', index);
app.use('/santas', santas);

app.listen(port, () => {
	console.log("server started on " + port);
});