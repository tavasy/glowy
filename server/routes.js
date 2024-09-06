const express = require('express');
const router = express.Router();

router.get('/trending-products', async (req, res) => {
  try {
    const collection = req.db.collection('TrendingProducts');
    const trendingProducts = await collection.find({}).toArray();
    res.json(trendingProducts);
  } catch (error) {
    console.error('Error fetching trending products:', error);
    res
      .status(500)
      .json({ error: 'An error occurred while fetching trending products.' });
  }
});

module.exports = router;
