import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import './App.scss';
import Header from './Header/Header';
import About from './About/About';
import Contact from './Contact/Contact';
import WorkSection from './WorkSection/WorkSection';
import WorkIntro from './WorkIntro/WorkIntro';
import ImageShowcase from './ImageShowcase/ImageShowcase';
import otello from './img/Otello.jpg';
import samson from './img/SamsonDelilah.jpg';
import giovanni from './img/DonGiovanni.jpg';

const operaSpreads = [otello, samson, giovanni];

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Route path="/" exact component={() => <WorkSection />} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />

        <WorkIntro />
        <ImageShowcase className="opera-showcase" imgs={operaSpreads} />
      </div>
    </BrowserRouter>
  );
}

export default App;
