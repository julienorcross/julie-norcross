import React from 'react';
import './About.scss';
import me from '../img/charlieandme.jpg';

const About = () => (
  <section className="About">
    <div className="bio-image">
      <div className="bio-image-container" />
      <p className="bio-image-caption">Me (left) and Charlie (right)</p>
    </div>
    <h2>Hey! I'm Julie.</h2>
    <div className="about-text">
      <div className="about-intro">
        <p>
          I discovered my love for design at age 11, when I first got my hands
          on PhotoShop (I used it to make sick signature graphics for
          <span className="emphasize"> American Idol</span> forums). My brief
          stint as an engineering major in college introduced me to computer
          science, and I fell in love with the structure and problem solving of
          writing code. I graduated from University of Maryland, College Park
          with a BA in graphic design, and continued to study code on my own.
        </p>
        <p>
          Since 2016, I've been working at the John F. Kennedy Center for the
          Performing Arts as a senior graphic designer. I am the head designer
          for the Washington National Opera, and also create print and digital
          collateral for comedy, jazz, and contemporary music performances.
        </p>
        <p>
          Outside of work, you can find me sewing, hosting political debate
          parties, weight lifting, taking yoga classes, listening to podcasts,
          and crying at
          <span className="emphasize"> Planet Earth.</span>
        </p>
      </div>
      <div className="about-skills">
        <h3>Skills/Knowledge</h3>
        <ul>
          <li>Design</li>
          <li>Adobe Creative Suite</li>
          <li>HTML/CSS</li>
          <li>Javascript (ES6)</li>
          <li>React</li>
          <li>SCSS</li>
        </ul>
      </div>
    </div>
  </section>
);

export default About;
