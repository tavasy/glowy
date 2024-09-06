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

router.get('/personal-products', async (req, res) => {
  try {
    const prompt = 'List 10 popular beauty products for silky hair.';

    const response = await req.openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: prompt },
      ],
      max_tokens: 150,
    });

    const productsText = response.choices[0].message.content.trim();
    const productsArray = productsText.split('\n').filter((product) => product);

    res.json({ products: productsArray });
  } catch (error) {
    console.error('Error fetching personal products from OpenAI:', error);
    res.status(500).json({ error: 'Failed to fetch products.' });
  }
});

module.exports = router;
