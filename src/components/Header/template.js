import * as React from 'react';
import './header.css';
import logo from './images/powerworx-logo-color.png';

const Template = function () {
  return (
    <header>
      <div className="wrapper">
        <div>
          <img src={logo} alt="logo" height="32"></img>
        </div>
        <div>
          <h1>Hello, qadesigner@qaquikworx.onmicrosoft.com</h1>
        </div>
      </div>
    </header>
  );
};

export { Template as default };
