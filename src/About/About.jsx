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
          I'm a designer/coder in Washington, D.C. who is interested in using my
          skills to help people and the progressive causes I care about.
        </p>
        <p>
          In 2016, I received my BA in graphic design from University of
          Maryland, College Park. Since graduating, I've worked at the John F.
          Kennedy Center for the Performing Arts as a senior graphic designer. I
          am the head designer for the Washington National Opera, and also
          create print and digital visuals for comedy, jazz, and contemporary
          music performances. I am always expanding my skillset with bootcamps
          and courses covering design, UX/UI, animation, and coding. Some recent
          favorites include:
        </p>
        <ul>
          <li>
            <a
              href="https://frontendmasters.com/courses/design-systems/"
              target="_blank">
              Design Systems with React & Storybook
            </a>
          </li>
          <li>
            <a
              href="https://generalassemb.ly/education/learn-html-css-web-design-online"
              target="_blank">
              General Assembly HTML, CSS & Web Design Circuit
            </a>
          </li>
          <li>
            <a href="https://refactoringui.com/book/" target="_blank">
              Refactoring UI
            </a>
          </li>
          <li>
            <a
              href="https://designcode.io/design-system-in-figma"
              target="_blank">
              DesignCode.IO Figma Design System
            </a>
          </li>
          <li>
            <a
              href="https://www.udemy.com/course/modern-html-css-from-the-beginning/"
              target="_blank">
              Modern HTML & CSS from the beginning
            </a>
          </li>
          <li>
            <a
              href="https://www.udemy.com/course/modern-javascript-from-the-beginning/"
              target="_blank">
              Modern JavaScript from the beginning
            </a>
          </li>
          <li>
            <a
              href="https://www.udemy.com/course/modern-react-bootcamp/"
              target="_blank">
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
