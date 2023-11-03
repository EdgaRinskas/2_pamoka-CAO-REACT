import React from 'react';
import '../App.css';
import HeroOne from './HeroOne';
import InnerHeader from './InnerHeader';
import InnerText from './InnerText';
import InnerImage from './InnerImage';
import ImageGrid from './ImageGrid';

function App() {
  return (
    <div className="App">
      <HeroOne title="Your Title" subtitle="Your Subtitle" color="#3f8ed0" />
      <div className="HeroBoxContainer">
        <InnerHeader />
        <InnerText />
        <InnerImage />
        <ImageGrid />
      </div>
    </div>
  );
}

export default App;
