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
          <a className="grid-heading" href="#">
            <h5>Pacman Artifical Intelligence</h5>
            <img className="img-responsive" src={arcade} alt="arcade" />
          </a>
          <p>
            Pacman artificial intelligence learns through reinforcement learning.
          </p>
        </section>

        <section className="col-1-3">
          <a className="grid-heading" href="#">
            <h5>Machine Learning Applications</h5>
            <img className="img-responsive" src={robot} alt="robot-playing-piano" />
          </a>
          <p>
            Random face generator using Generative Adverserial Network. Simpsons script generator.
          </p>
        </section>

        <section className="col-1-3">
          <a className="grid-heading" href="#">
            <h5>Web Applications</h5>
            <img className="img-responsive" src={code} alt="late night code" />
          </a>
          <p>
            Web applications for a diversity of purposes.
          </p>
        </section>
      </div>
    </section>
  );
}

export default Home;
