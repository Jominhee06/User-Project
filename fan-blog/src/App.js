import React from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Artist from './pages/Artist';
import News from './pages/News';
import SocialMediaFeed from './pages/SocialMediaFeed';
import ExclusiveContent from './pages/ExclusiveContent';
import PushNotification from './pages/PushNotification';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/artist" element={<Artist />} />
            <Route path="/news" element={<News />} />
            <Route path="/social-media" element={<SocialMediaFeed />} />
            <Route path="/exclusiveContent" element={<ExclusiveContent />} />
            <Route path="/pushnotification" element={<PushNotification />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


