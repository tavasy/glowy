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
    const goal = req.query.goal || 'haircare';
    const prompt = `
    List exactly 6 popular products for ${goal} in September 2024 for age group 18-30. Return the product information as a valid JSON object with the following structure:

    {
      "brand": "Brand Name",
      "title": "Product Title",
      "description": "Product description",
      "link": "https://brandwebsite.com (brand website, not a product-specific link)"
    }

    Only return the JSON object, with no additional text, explanation, or commentary.
    `;

    const response = await req.openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: prompt },
      ],
      max_tokens: 1000,
    });

    let productsText = response.choices[0].message.content.trim();

    const jsonStart = productsText.indexOf('[');
    const jsonEnd = productsText.lastIndexOf(']') + 1;
    const jsonText = productsText.substring(jsonStart, jsonEnd);

    let products;
    try {
      products = JSON.parse(jsonText);
    } catch (e) {
      console.error('Error parsing JSON response from OpenAI:', e);
      return res
        .status(500)
        .json({ error: 'Invalid response format from OpenAI' });
    }

    res.json({ products });
  } catch (error) {
    console.error('Error fetching personal products from OpenAI:', error);
    res.status(500).json({ error: 'Failed to fetch products.' });
  }
});

module.exports = router;
