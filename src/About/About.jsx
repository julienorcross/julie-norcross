import React from 'react';
import './About.scss';

const About = () => (
  <section id="about">
    <div id="bio-image">
      <div id="about-img">
        {/* <img src={me} className="drop-shadow" alt="cute girl with glasses" /> */}
      </div>
      <div id="about-text">
        <h2>Hey! I'm Julie.</h2>
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
          My other hobbies include sewing my own clothes with environmentally
          friendly fabrics, knitting, hangin' with my two cats, and crying at
          <span className="emphasize"> Planet Earth.</span>
        </p>
      </div>
    </div>
  </section>
);

export default About;
