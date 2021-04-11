import React from 'react';
import { Link } from 'react-router-dom';

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
          In my day job, I'm the manager of advertising design at the{' '}
          <a href="https://www.kennedy-center.org/" target="_blank">
            John F. Kennedy Center for the Performing Arts
          </a>{' '}
          where I lead design for the Washington National Opera and create print
          and digital visuals for comedy, jazz, ballet, dance, and contemporary
          music performances.
        </p>
        <p>
          I have a BA in graphic design from the University of Maryland, College
          Park and I'm always expanding my skills with bootcamps and courses
          covering UX/UI design, animation, and coding.
        </p>
        <p>
          Outside of work, you can find me sewing, hiking with my dog, lifting
          weights, and practicing yoga. <Link to="/contact">Say Hi!</Link>
        </p>
      </div>

      <div className="about-list">
        <h3>Skills</h3>
        <ul>
          <li>Graphic Design</li>
          <li>Adobe Creative Suite (InDesign, Illustrator, Photoshop, etc.)</li>
          <li>Figma</li>
          <li>HTML/CSS/Sass</li>
          <li>Javascript</li>
          <li>React</li>
          <li>Wordpress</li>
        </ul>
      </div>

      <div className="about-list">
        <h3>Courses</h3>
        <ul>
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
              href="https://academy.zerotomastery.io/p/complete-web-and-mobile-designer"
              target="_blank"
              rel="noopener noreferrer">
              Complete Web & Mobile Designer: UI/UX/Figma
            </a>
          </li>
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
              href="https://refactoringui.com/book/"
              target="_blank"
              rel="noopener noreferrer">
              Refactoring UI
            </a>
          </li>
          <li>
            <a
              href="https://designingui.com/"
              target="_blank"
              rel="noopener noreferrer">
              Designing User Interfaces
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
          <li>
            <a
              href="https://frontendmasters.com/courses/html-email-v2/"
              target="_blank"
              rel="noopener noreferrer">
              Frontendmasters HTML Emails
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default About;
