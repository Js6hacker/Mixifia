import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import AudioDemo from './components/AudioDemo';
import Changelog from './components/Changelog';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [downloadCount, setDownloadCount] = useState(14258);

  const handleDownload = () => {
    // 1. Increment local UI count for responsive feedback
    setDownloadCount(prev => prev + 1);

    // 2. Open the official download path directly
    window.location.href = 'https://mixifia.aicentralstore.com/download/mixifia.apk';
  };

  return (
    <div className="app-container">
      {/* Decorative ambient background glows */}
      <div className="ambient-glow-1"></div>
      <div className="ambient-glow-2"></div>
      <div className="ambient-glow-3"></div>

      <Header onDownload={handleDownload} />

      <main>
        <Hero onDownload={handleDownload} downloadCount={downloadCount} />
        <Features />
        <AudioDemo />
        <Changelog />
      </main>

      <Footer />
    </div>
  );
}

export default App;
