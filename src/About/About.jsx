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
          I'm a designer and coder who is interested in using my skills to help
          people and the progressive causes I care about.
        </p>
        <p>
          For the last five years I have been working at the John F. Kennedy
          Center for the Performing Arts. Starting as a graphic designer, I
          moved up to senior graphic designer and then to become the manager of
          advertising design. I am the head designer for the Washington National
          Opera, and also create print and digital visuals for comedy, jazz,
          ballet, dance, and contemporary music performances.
        </p>
        <p>
          I have a BA in graphic design from the University of Maryland, College
          Park, but I am always expanding my skillset with bootcamps and courses
          covering design, UX/UI, animation, and coding. Some recentfavorites
          include:
        </p>
        <ul>
          <li>
            <a
              href="https://frontendmasters.com/courses/design-systems/"
              target="_blank"
              rel="noopener noreferrer">
              Design Systems with React & Storybook
            </a>
          </li>
          <li>
            <a
              href="https://generalassemb.ly/education/learn-html-css-web-design-online"
              target="_blank"
              rel="noopener noreferrer">
              General Assembly HTML, CSS & Web Design Circuit
            </a>
          </li>
          <li>
            <a
              href="https://refactoringui.com/book/"
              target="_blank"
              rel="noopener noreferrer">
              Refactoring UI
            </a>
          </li>
          <li>
            <a
              href="https://designcode.io/design-system-in-figma"
              target="_blank"
              rel="noopener noreferrer">
              DesignCode.IO Figma Design System
            </a>
          </li>
          <li>
            <a
              href="https://www.udemy.com/course/modern-html-css-from-the-beginning/"
              target="_blank"
              rel="noopener noreferrer">
              Modern HTML & CSS from the beginning
            </a>
          </li>
          <li>
            <a
              href="https://www.udemy.com/course/modern-javascript-from-the-beginning/"
              target="_blank"
              rel="noopener noreferrer">
              Modern JavaScript from the beginning
            </a>
          </li>
          <li>
            <a
              href="https://www.udemy.com/course/modern-react-bootcamp/"
              target="_blank"
              rel="noopener noreferrer">
              The Modern React Bootcamp
            </a>
          </li>
        </ul>
        <p>
          Outside of work, you can find me sewing, hosting presidential debate
          parties, weightlifting, practicing yoga, attending standup comedy
          shows, and pointing out every dog in the vicinity.{' '}
          <a href="https://www.julienorcross.com/contact">Say hi!</a>
        </p>
      </div>
      <div className="about-skills">
        <h3>Skills</h3>
        <ul>
          <li>Graphic Design</li>
          <li>Adobe Creative Suite (InDesign, Illustrator, Photoshop, etc.)</li>
          <li>HTML/CSS/Sass</li>
          <li>Figma</li>
          <li>Javascript</li>
          <li>React</li>
          <li>Wordpress</li>
        </ul>
      </div>
    </div>
  </section>
);

export default About;
