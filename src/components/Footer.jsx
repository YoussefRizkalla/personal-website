import React from 'react';
import social from './social.json';

const Footer = () => (
  <div>
    <div>
      <div>
        <h2 style={{ fontFamily: 'Bad Script' }}>Youssef Rizkalla</h2>

        <span>
          © All rights are reserved | {new Date().getFullYear()} | Built with{' '}
          <a
            href="https://www.gatsbyjs.com/"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="gatsby"
          >
            <img
              style={{ verticalAlign: 'top' }}
              width="18"
              height="18"
              src="icons/gatsby.svg"
              alt="gatsby"
            />
          </a>
        </span>
      </div>
      <div>
        {social.map(({ id, name, link, icon }) => (
          <a
            key={id}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`follow me on ${name}`}
          >
            <img width="24" src={icon} alt={name} />
          </a>
        ))}
      </div>
    </div>
  </div>
);

export default Footer;
