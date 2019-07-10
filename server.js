const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const bodyParser = require('body-parser')
const dotenv = require('dotenv');
dotenv.config();
const server = express();
const items = require('./routes/api/items');

//Use test DB if we're testing
if (process.env.ENV != 'development')
{
  process.env.connection = process.env.test_connection;
}

//Connect to MongoDB
mongoose.connect(process.env.connection,{ useNewUrlParser: true })
.then (() => console.log('MongoDB Connected...'))
.catch(err => console.log(err));

//Helmet protects against HTTP vulnerabilities
server.use(helmet());

//Redirect to our routes
server.use(bodyParser.json());
server.use('/api/items', items);

//Set Port to environment port or 5000
const port = process.env.PORT;

//Run server
module.exports = server.listen(port, () => console.log(`Server Started On Port ${port}`));

