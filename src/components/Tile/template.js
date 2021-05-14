import * as React from 'react';
import './tile.css';

const Template = function (prop) {
  return (
    <button id="tile" type="button" mode="filled" size={prop.size} style={{ backgroundColor: prop.background, color: prop.textColor }}>
      {prop.label}
    </button>
  );
};

export { Template as default };
