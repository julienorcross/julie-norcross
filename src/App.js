import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
// import workItems from '../src/data/WorkItems.js';

import './App.scss';
import Header from './Layout/Header/Header';
import About from './About/About';
import Contact from './Contact/Contact';
import Homepage from './Work/Homepage/Homepage';
import Footer from './Footer/Footer';
import WorkItem from './Work/WorkItem/WorkItem';
import getWorkItems from './getWorkItems';

class App extends Component {
  state = { workItems: [] };

  async componentDidMount() {
    getWorkItems().then(workItems => {
      this.setState({ workItems });
    });
  }

  render() {
    const { workItems } = this.state;
    console.log(workItems);
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Route
            path="/"
            exact
            component={() => <Homepage items={workItems} />}
          />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route
            path="/work/:workSlug"
            component={props => (
              <WorkItem
                // items={workItems.filter(
                //   item => `/work/${item.slug}` === this.props.to
                // )}
                // {...props}
                items={workItems}
                {...props}
              />
            )}
          />
          <Footer></Footer>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
