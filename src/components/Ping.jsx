import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import ping from '../assets/images/illustration-dashboard.png';
import styles from '../assets/ping.module.scss';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

function Ping() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
        <div
          className={styles.email}
          style={
            message && windowSize <= 650
              ? {
                  marginBottom: '40px',
                }
              : undefined
          }>
          <input
            id="email"
            autoComplete="off"
            type="email"
            value={email}
            onChange={handleOnChange}
            placeholder="Your email address…"
            style={
              message && windowSize <= 650
                ? {
                    border: '1px solid var(--light-red)',
                    marginBottom: '42px',
                  }
                : undefined
            }
          />
          <button onClick={emailValidation}>Notify Me</button>
          <span className={styles.error}>{message}</span>
        </div>

        <img src={ping} alt="main" />
        <ul>
          <li>
            <a href="https://facebook.com/">
              <FaFacebookF className={styles.social} />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/">
              <FaTwitter className={styles.social} />
            </a>
          </li>
          <li>
            <a href="https://instagram.com/">
              <FaInstagram className={styles.social} />
            </a>
          </li>
        </ul>
        <p className={styles.copy}>© Copyright Ping. All rights reserved.</p>
      </article>
    </main>
  );
}

export default Ping;
