require('dotenv').config();
const express = require('express');
const { MongoClient } = require('mongodb');
const routes = require('./routes');
const cors = require('cors');
const OpenAIApi = require('openai');

const corsOptions = {
  origin: 'https://glowy-client.onrender.com',
};

const app = express();
app.use(cors(corsOptions));
const port = process.env.PORT || 5050;

const mongoURI = process.env.MONGODB_KEY;

const openai = new OpenAIApi({
  apiKey: process.env.OPENAI_KEY,
});

let db;
MongoClient.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then((client) => {
    db = client.db('Products');
    console.log('Connected to MongoDB');

    // Middleware to add DB to req
    app.use((req, res, next) => {
      req.db = db;
      req.openai = openai;
      next();
    });

    // Routes
    app.use('/api', routes);

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => console.error('Failed to connect to MongoDB', error));
