import React from 'react';

import './About.scss';

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
          on Photoshop (I used it to make sick signature graphics for{' '}
          <em>American Idol</em> forums). I graduated from University of
          Maryland, College Park with a BA in graphic design in 2016. Since
          graduating college, I've been working at the John F. Kennedy Center
          for the Performing Arts as a senior graphic designer. I am the head
          designer for the Washington National Opera, and also create print and
          digital visuals for comedy, jazz, and contemporary music performances.
          I am a lifelong learner and have continued expanding my skillset with
          bootcamps and online courses covering design, UX/UI, animation, and
          coding. Some recent favorites include:
        </p>
        <ul>
          <li>
            <a href="https://generalassemb.ly/education/learn-html-css-web-design-online">
              General Assembly HTML, CSS & Web Design Circuit
            </a>
          </li>
          <li>
            <a href="https://refactoringui.com/book/">Refactoring UI</a>
          </li>
          <li>
            <a href="https://designcode.io/design-system-in-figma">
              DesignCode.IO Figma Design System
            </a>
          </li>
          <li>
            <a href="https://www.udemy.com/course/modern-html-css-from-the-beginning/">
              Modern HTML & CSS from the beginning
            </a>
          </li>
          <li>
            <a href="https://www.udemy.com/course/modern-javascript-from-the-beginning/">
              Modern JavaScript from the beginning
            </a>
          </li>
          <li>
            <a href="https://www.udemy.com/course/modern-react-bootcamp/">
              The Modern React Bootcam
            </a>
          </li>
        </ul>
        <p>
          Outside of work, you can find me sewing, hosting presidential debate
          parties, weightlifting, taking yoga classes, attending standup comedy
          shows, and pointing out every dog in the vicinity.{' '}
          <a href="https://www.julienorcross.com/contact">Say hi!</a>
        </p>
      </div>
      <div className="about-skills">
        <h3>Skills</h3>
        <ul>
          <li>Graphic Design</li>
          <li>Adobe Creative Suite</li>
          <li>HTML/CSS/Sass</li>
          <li>Javascript</li>
          <li>React</li>
          <li>Wordpress</li>
        </ul>
      </div>
    </div>
  </section>
);

export default About;
