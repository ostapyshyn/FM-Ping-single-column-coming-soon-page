import React from 'react';
import ping from '../assets/images/illustration-dashboard.png';
import styles from '../assets/ping.module.scss';

function Ping() {
  return (
    <main>
      <article>
        <h1>
          PING<span>.</span>
        </h1>
        <h2>We are launching soon!</h2>
        <p>Subscribe and get notified</p>
        <input type="text" />
        <button>Notify Me</button>
        <img src={ping} alt="main" />

        <p>© Copyright Ping. All rights reserved.</p>
      </article>
    </main>
  );
}

export default Ping;
