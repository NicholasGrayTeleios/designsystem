import * as React from 'react';

const Template = function (prop) {
  return (
    <button type="button" mode="filled" size={prop.size}>
      {prop.label}
    </button>
  );
};

export { Template as default };
