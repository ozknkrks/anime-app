
const express = require('express');
const router = express.Router();
const Anime = require('../models/Anime');

// GET all anime
router.get('/', async (req, res) => {
  try {
    const animeList = await Anime.find();
    res.json(animeList);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST create anime
router.post('/', async (req, res) => {
  try {
    const newAnime = new Anime(req.body);
    await newAnime.save();
    res.status(201).json(newAnime);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
