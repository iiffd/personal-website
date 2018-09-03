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
          <a className="img-container-link" href="#">
            <img className="img-tab" src={arcade} alt="arcade" />
            <div className="overlay background-color-1">
              <div className="overlay-text text-color-white">
                Pacman Artificial Intelligence
              </div>
            </div>
          </a>
          {/* <p>
            Pacman artificial intelligence learns through reinforcement learning.
          </p> */}
        </section>

        <section className="col-1-3">
          <a className="img-container-link" href="#">
            <img className="img-tab" src={robot} alt="robot-playing-piano" />
            <div className="overlay background-color-2">
              <div className="overlay-text text-color-black">
                Machine Learning Applications
              </div>
            </div>
          </a>
          {/* <p>
            Random face generator using Generative Adverserial Network. Simpsons script generator.
          </p> */}
        </section>

        <section className="col-1-3">
          <a className="img-container-link" href="/projects/rhymedoctor">
            <img className="img-tab" src={code} alt="late night code" />
            <div className="overlay background-color-3">
              <div className="overlay-text text-color-white">
                Web Applications
              </div>
            </div>
          </a>
          {/* <p>
            Web applications for a diversity of purposes.
          </p> */}
        </section>
      </div>
    </section>
  );
};

export default Home;
