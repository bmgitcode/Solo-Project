const express = require('express');
const app = express();
const path = require('path');
const fetches = require('./apiController')
const mongoose = require('mongoose')

const PORT = 3000;

app.use(express.json());
// app.use('/', apiRouter);

// connect to db
// const mongoURI =
//   process.env.NODE_ENV === 'test'
//     ? 'mongodb://localhost/unit11test'
//     : 'mongodb://localhost/unit11dev';
// mongoose.connect(mongoURI);


app.use('/build', express.static(path.join(__dirname, '../build')));
// serve index.html on the route '/'
app.get('/', (req, res) => {
  // sending index.html to browser
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});
app.post('/', fetches.getFoodLocations, (req, res) => {
  console.log(locations)
  return res.status(200).json(res.locals.locations)
} )

app.listen(3000);

module.exports = app;
