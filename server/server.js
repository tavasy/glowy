const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5050;

app.use(cors());

const uri =
  'mongodb+srv://tanyavasylieva01:FLiF1t6KM4qFi20L@products.ppup9.mongodb.net/?retryWrites=true&w=majority&appName=Products';

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function connectToDB() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error(err);
  }
}

connectToDB();

app.get('/api/trending-products', async (req, res) => {
  try {
    const database = client.db('Products');
    const collection = database.collection('TrendingProducts');

    const products = await collection.find({}).toArray();

    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching products');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
