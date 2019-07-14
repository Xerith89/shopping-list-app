const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const bodyParser = require('body-parser')
const dotenv = require('dotenv');
dotenv.config();
const server = express();
const items = require('./routes/api/items');
const cors = require('cors');

//Connect to MongoDB
mongoose.connect(process.env.connection,{ useNewUrlParser: true })
.then (() => console.log('MongoDB Connected...'))
.catch(err => console.log(err));

//Helmet protects against HTTP vulnerabilities
server.use(helmet());
server.use(cors());

//Redirect to our routes
server.use(bodyParser.json());
server.use('/api/items', items);

//Set Port to environment port or 5000
const port = process.env.PORT;

//Run server
module.exports = server.listen(port, () => console.log(`Server Started On Port ${port}`));

