const express = require('express');
const app = express();
const mongoose = require('mongoose');

const dbController = require('./dbController');

const PORT = 3000;

mongoose.connect('mongodb+srv://project:project@cluster0.o8r3x8u.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const locationRouter = express.Router();
app.use('/', locationRouter);

// Create a student in the database
// http://localhost:3000/student
locationRouter.post('/', dbController.???, (req, res) => {
  res.status(200).json(res.locals.newStudent);
});

// Get a student from the database
// http://localhost:3000/student/"name"
locationRouter.get('/:name', dbController.???, (req, res) => {
  res.status(200).json(res.locals.student);
});

// Change a students name
// http://localhost:3000/student/"name"
locationRouter.patch('/:name', dbController.???, (req, res) => {
  res.status(200);
});

// Delete a student from the database
// http://localhost:3000/student/"name"
locationRouter.delete('/:name', dbController.???, (req, res) => {
  res.status(200);
});

// Unknown route handler
app.use((req, res) => res.sendStatus(404));

// Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
