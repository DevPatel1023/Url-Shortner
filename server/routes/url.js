const express = require('express');
const router = express.Router();
const Url = require('../models/url');
const { BASE_URL } = process.env;

// POST method for giving the original URL
router.post('/shortner', async (req, res) => {
  const { originalUrl } = req.body;
  try {
    let url = await Url.findOne({ originalUrl });

    if (url) {
      res.json(url);
    } else {
      const { nanoid } = await import('nanoid');
      const code = nanoid(8);
      const shortUrl = `${BASE_URL}/${code}`;
      url = new Url({ originalUrl, shortUrl });
      await url.save();
      res.json(url);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json('Server error');
  }
});

// GET method for redirecting to the original URL
router.get('/:code', async (req, res) => {
  try {
    const url = await Url.findOne({ shortUrl: `${BASE_URL}/${req.params.code}` });
    if (url) {
      return res.redirect(url.originalUrl);
    } else {
      return res.status(404).json('No URL found!');
    }
  } catch (err) {
    console.log(err);
    res.status(500).json('Server error!');
  }
});

module.exports = router;
