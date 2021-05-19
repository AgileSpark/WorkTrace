const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

const PORT = 5000;

// Require in routers
const userRouter = require('./routes/userRouter');
const listingRouter = require('./routes/listingRouter');

// Parse the body of requests and apply cors
app.use(cors());
app.use(express.json());
app.use(express.urlenconded({extended: true}));

// Serve static files
app.use(express.static(path.resolve(__dirname, '../src/style.css')))

// Routes
app.use('/login', userRouter);

app.use('/signup', userRouter);

app.use('/listings', listingRouter);

// Unknown Routes and Global error handlers
app.use((req, res) => res.status(400).send('The page your are looking for does not exist on WorkTrace'));

const errorDetail = {
  log: 'Express Global Error Handler Caught an Unknown Error',
  status: 500,
  message: { err: 'Error Check You\'re Route'}
}

app.use((err, req, res, next) => {
  const currentError = Object.assign({}, errorDetail, err);
  res.status(currentError.status).json(currentError.message);
})

// Listen on PORT
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));