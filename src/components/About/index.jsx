import React from 'react';
import './About.css';

const About = () => {
  return (
    <section>
      <h5 className="section-title">Nice to meet you</h5>
      <p className="about-text">
        I'm Samuel, welcome to my website.
        I built my site in React, which I had a lot of fun working with.
        I'm a full stack developer, and as of late, have been working a lot with the MERN stack (i.e. Mongoose, Express.js, React.js, Node.js).
        In addition to web development, I'm a very enthusiastic machine learning hobbiest.
        In the projects section, you'll see that I've built several machine learning applications.
        <br />
        <br /><strong>Fun Facts:</strong>
        <ul>
          <li>It takes about 70 hours of driving to do a round trip from San Francisco to New York.</li>
          <li>2500K is not enough money to do a round trip around the U.S.</li>
          <li>Unless you take advantage of the hospitality of friends or sleep in the car.</li>
          <li>An empty freeway is a thing of beauty.</li>
        </ul>
      </p>
    </section>
  );
}

export default About;
