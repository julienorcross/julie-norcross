import React, { Component } from 'react';
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
import getWorkItems from './getWorkItems';

class App extends Component {
  state = { workItems: [], isLoading: true };

  async componentDidMount() {
    const workItems = await getWorkItems();
    this.setState({ workItems, isLoading: false });
  }

  renderRoutes() {
    const { workItems } = this.state;

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
  }

  render() {
    const { isLoading } = this.state;

    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          {isLoading ? <Spinner></Spinner> : this.renderRoutes()}
          <Footer></Footer>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
