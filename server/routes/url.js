const express = require('express');
const router = express.Router();
const Url = require('../models/url');
const QRCode = require("qrcode");
const { nanoid } = require('nanoid');

const BASE_URL = process.env.BASE_URL || "http://localhost:5000"; // Ensure BASE_URL is correctly set

// POST: Shorten URL & Generate QR Code
router.post('/shortner', async (req, res) => {
  const { originalUrl } = req.body;
  if (!originalUrl) {
    return res.status(400).json({ error: 'URL is required' });
  }

  try {
    let url = await Url.findOne({ originalUrl });

    if (url) {
      // Generate QR Code for the existing short URL
      const qrCode = await QRCode.toDataURL(url.shortUrl);
      return res.json({ shortUrl: url.shortUrl, qrCode });
    }

    // Generate new short URL
    const code = nanoid(8);
    const shortUrl = `${BASE_URL}/${code}`;

    // Save to database
    url = new Url({ originalUrl, shortUrl });
    await url.save();

    // Generate QR Code for the new short URL
    const qrCode = await QRCode.toDataURL(shortUrl);

    res.json({ shortUrl, qrCode });

  } catch (err) {
    console.error(err);
    res.status(500).json('Server error');
  }
});

// GET: Redirect Short URL to Original URL
router.get('/:code', async (req, res) => {
  try {
    const shortUrl = `${BASE_URL}/${req.params.code}`;
    const url = await Url.findOne({ shortUrl });

    if (url) {
      return res.redirect(url.originalUrl);
    } else {
      return res.status(404).json({ error: 'No URL found!' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json('Server error');
  }
});

module.exports = router;
