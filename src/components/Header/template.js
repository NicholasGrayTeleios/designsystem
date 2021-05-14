import * as React from 'react';
import './header.css';

const Template = function () {
  return (
    <header>
      <div className="wrapper">
        <div>
          <img src="https://teleiosmediastorage.blob.core.windows.net/asset-b8cebfa1-ff13-4034-882c-637336a651a3/powerworx-logo-color.png?sp=r&st=2021-05-14T15:10:40Z&se=2041-05-14T23:10:40Z&sv=2020-02-10&sr=b&sig=eva6%2Bayxpd5iBtIKzZDH4m1kZe4vsS4D1%2BlwKaERJPU%3D" 
          alt="logo" height="32"></img>
        </div>
        <div>
          <h1>Hello, qadesigner@qaquikworx.onmicrosoft.com</h1>
        </div>
      </div>
    </header>
  );
};

export { Template as default };
