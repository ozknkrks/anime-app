
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import AnimeListPage from './pages/AnimeListPage';
import AnimeDetailPage from './pages/AnimeDetailPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import QuizPage from './pages/QuizPage';
import QuotesPage from './pages/QuotesPage';
import WallpapersPage from './pages/WallpapersPage';
import ForumPage from './pages/ForumPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/anime" element={<AnimeListPage />} />
        <Route path="/anime/:id" element={<AnimeDetailPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/quotes" element={<QuotesPage />} />
        <Route path="/wallpapers" element={<WallpapersPage />} />
        <Route path="/forum" element={<ForumPage />} />
      </Routes>
    </Router>
  );
}

export default App;
