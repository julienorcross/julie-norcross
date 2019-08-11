import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import workItems from '../src/data/WorkItems.js';

import './App.scss';
import Header from './Layout/Header/Header';
import About from './About/About';
import Contact from './Contact/Contact';
import WorkSection from './Work/WorkSection/WorkSection';
import ImageShowcase from './Work/ImageShowcase/ImageShowcase';
import WorkItem from './Work/WorkItem/WorkItem';
import otello from './img/Otello.jpg';
import samson from './img/SamsonDelilah.jpg';
import giovanni from './img/DonGiovanni.jpg';

const operaSpreads = [otello, samson, giovanni];

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Route
          path="/"
          exact
          component={() => <WorkSection items={workItems} />}
        />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route
          path="/work/:workSlug"
          component={props => <WorkItem items={workItems} {...props} />}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
