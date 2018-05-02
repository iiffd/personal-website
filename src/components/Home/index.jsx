import React from 'react';

import './Home.css';
import code from './late-night-code.jpg';
import arcade from './arcade.jpg';
import robot from './robot-playing-piano.jpg';

const Home = () => {
  return (
    <section className="row">
      <div className="grid">

        <section className="col-1-3">
          <div className="img-container">
            {/* <h5>Pacman Artifical Intelligence</h5> */}
            <img className="img-tab" src={arcade} alt="arcade" />
            <div className="overlay">
              <div className="overlay-text">Hello</div>
            </div>
          </div>
          {/* <p>
            Pacman artificial intelligence learns through reinforcement learning.
          </p> */}
        </section>

        <section className="col-1-3">
          <div className="img-container">
            {/* <h5>Machine Learning Applications</h5> */}
            <img className="img-tab" src={robot} alt="robot-playing-piano" />
            <div className="overlay">
              <div className="overlay-text">Hello</div>
            </div>
          </div>
          {/* <p>
            Random face generator using Generative Adverserial Network. Simpsons script generator.
          </p> */}
        </section>

        <section className="col-1-3">
          <div className="img-container">
            {/* <h5>Web Applications</h5> */}
            <img className="img-tab" src={code} alt="late night code" />
            <div className="overlay">
              <div className="overlay-text">Hello</div>
            </div>
          </div>
          {/* <p>
            Web applications for a diversity of purposes.
          </p> */}
        </section>
      </div>
    </section>
  );
}

export default Home;
