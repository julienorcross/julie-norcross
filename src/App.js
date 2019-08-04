import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import './App.scss';
import Header from './Header/Header';
import Contact from './Contact/Contact';
import WorkIntro from './WorkIntro/WorkIntro';
import ImageShowcase from './ImageShowcase/ImageShowcase';
import otello from './img/Otello.jpg';
import samson from './img/SamsonDelilah.jpg';
import giovanni from './img/DonGiovanni.jpg';

const operaSpreads = [otello, samson, giovanni];

function App() {
  return (
    <div className="container">
      <Header />

      <WorkIntro />
      <ImageShowcase className="opera-showcase" imgs={operaSpreads} />
      <Contact />
    </div>
  );
}

export default App;
