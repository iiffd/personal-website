import React from 'react';
import photo from './samuel.jpg';
import resume from './resume.pdf';
import './About.css';

const About = () => {
  return (
    <section>
      <h5 className="section-title">Nice to meet you</h5>
      <img src={photo} className="about-photo" alt="Samuel" />
      <p className="about-text">
        I'm Samuel, welcome to my website. I'm a full stack developer, and as of
        late, have been working a lot with React and Node. In fact, I built this
        site in React. In addition to web development, I'm a very enthusiastic
        machine learning hobbiest. If you look at some of the projects in the
        home page, you'll see that I've built several machine learning
        applications.
        <br />
        <br />
        <strong>Fun Facts:</strong>
        <ul>
          <li>
            I did a round trip from San Francisco to New York. It took me about
            70 hours of driving.
          </li>
          <li>
            I am a big fan of SpaceX. Very excited about the idea of humanity
            going to Mars.
          </li>
        </ul>
      </p>
      <p className="resume-button">
        <a href={resume} target="_blank">
          Download Resume
        </a>
      </p>
    </section>
  );
};

export default About;
