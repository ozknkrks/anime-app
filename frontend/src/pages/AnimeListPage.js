
import React from 'react';

const sampleAnime = [
  {
    id: 1,
    title: 'Attack on Titan',
    image: 'https://upload.wikimedia.org/wikipedia/en/7/70/Attack_on_Titan_S4.jpg',
    description: 'Humans fight for survival against man-eating giants.'
  },
  {
    id: 2,
    title: 'Jujutsu Kaisen',
    image: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Jujutsu_Kaisen_season_1_key_visual.jpg',
    description: 'A boy swallows a cursed object and gains immense power.'
  },
  {
    id: 3,
    title: 'Naruto',
    image: 'https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg',
    description: 'A ninja dreams of becoming the strongest in his village.'
  }
];

export default function AnimeListPage() {
  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-6">Anime List</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sampleAnime.map(anime => (
          <div key={anime.id} className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform">
            <img src={anime.image} alt={anime.title} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{anime.title}</h2>
              <p className="text-sm mt-2 text-gray-300">{anime.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
