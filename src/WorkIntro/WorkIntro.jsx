import React, { Component } from 'react';
import './WorkIntro.scss';

class Opera extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="opera-wrapper">
        <div className="opera-img" />
        <div className="opera-text">
          <h2>Washington National Opera</h2>
          <h3>2019/2020 Subscription Brochure</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
            totam, ipsa laborum fugiat officiis, quia ea rem odit reprehenderit
            inventore voluptate nobis deleniti cupiditate dolorum! Fugit
            perspiciatis harum ut sapiente!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            facere dolorem sint voluptates aspernatur, ea ipsum officia
            necessitatibus, eos quos placeat blanditiis! Quam, magnam
            praesentium laudantium amet minima mollitia libero magni esse illo
            blanditiis architecto tenetur repudiandae pariatur velit cumque.
          </p>
        </div>
      </div>
    );
  }
}

export default Opera;
