import express from 'express';
import database from './server';

const router = express.Router();

router.get('/api/trending-products', async (req, res) => {
  try {
    const collection = database.collection('TrendingProducts');

    const products = await collection.find({}).toArray();

    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching products');
  }
});

export default router;
