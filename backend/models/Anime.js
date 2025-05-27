
const mongoose = require('mongoose');

const AnimeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String },
  episodes: { type: Number },
  genres: [String],
  status: { type: String, enum: ['Airing', 'Completed', 'Upcoming'], default: 'Completed' },
}, { timestamps: true });

module.exports = mongoose.model('Anime', AnimeSchema);
