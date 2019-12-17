import React, { useState, useEffect } from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
// import workItems from '../src/data/WorkItems.js';

import './App.scss';
import Header from './Layout/Header/Header';
import About from './About/About';
import Contact from './Contact/Contact';
import Homepage from './Work/Homepage/Homepage';
import Footer from './Footer/Footer';
import NotFound from './NotFound/NotFound';
import WorkItem from './Work/WorkItem/WorkItem';
import Spinner from './Spinner/Spinner';
import getWorkItems from './Actions/getWorkItems';
import ScrollToTop from './ScrollToTop';

const App = () => {
  // useState
  const [workItems, setWorkItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchWorkItems() {
      const workItems = await getWorkItems();
      setWorkItems(workItems);
      setIsLoading(false);
    }
    fetchWorkItems();
  }, []);

  const renderRoutes = () => {
    return (
      <Switch>
        <Route
          path="/"
          exact
          component={() => <Homepage items={workItems} />}
        />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route
          path="/work/:workSlug"
          component={props => {
            const slug = props.match.params.workSlug;
            return (
              <WorkItem
                item={workItems.find(item => item.slug === slug)}
                {...props}
                // items={workItems}
                // {...props}
              />
            );
          }}
        />
        <Route path="/404" component={NotFound} />
        <Redirect to="/404" />
      </Switch>
    );
  };

  return (
    <BrowserRouter>
      <ScrollToTop>
        <div className="container">
          <Header />
          {isLoading ? <Spinner /> : renderRoutes()}
          <Footer></Footer>
        </div>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default App;
