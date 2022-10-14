import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import ping from '../assets/images/illustration-dashboard.png';
import styles from '../assets/ping.module.scss';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

function Ping() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleOnChange = (e) => {
    setEmail(e.target.value);
  };

  const emailValidation = () => {
    const regEx = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
    if (!regEx.test(email) && email !== '') {
      setMessage('Please provide a valid email address');
    } else if (email === '') {
      setMessage('Please provide a valid email address');
    } else {
      setMessage('');
      setEmail('');
    }
  };

  return (
    <main>
      <article>
        <h1>
          PING<span>.</span>
        </h1>
        <h2>
          We are launching <span>soon!</span>
        </h2>
        <p>Subscribe and get notified</p>
        <div className={styles.email}>
          <input
            id="email"
            autoComplete="off"
            type="email"
            value={email}
            onChange={handleOnChange}
            placeholder="Your email address…"
          />

          <button onClick={emailValidation}>Notify Me</button>
          <p className={styles.error}>{message}</p>
        </div>

        <img src={ping} alt="main" />
        <ul>
          <li>
            <FaFacebookF className={styles.social} />
          </li>
          <li>
            <FaTwitter className={styles.social} />
          </li>
          <li>
            <FaInstagram className={styles.social} />
          </li>
        </ul>
        <p className={styles.copy}>© Copyright Ping. All rights reserved.</p>
      </article>
    </main>
  );
}

export default Ping;
