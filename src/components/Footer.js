import React from 'react';
import logo from '../images/logo.svg';

const Footer = () => (
  <div className="footer">
    <div>
      <p>Coded by Natalie Salemme</p>
      <img src={logo} className="logo" alt="react-logo" />
      <a
        href="https://github.com/NatalieSalemme/react-pokedex"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="logo"
          src={require('../images/github.png')}
          alt="Github logo"
          href="https://github.com/NatalieSalemme/react-calculator"
        />
      </a>
    </div>
  </div>
);
export default Footer;
