import routes from './routes';

const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5050;

app.use(cors());
app.use('/trending-products', routes);

const uri = process.env.MONGODB_KEY;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let database = client.db('Products');

async function connectToDB() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error(err);
  }
}

connectToDB();

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default database;
