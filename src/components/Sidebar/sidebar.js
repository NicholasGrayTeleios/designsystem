import * as React from 'react';
import PropTypes from 'prop-types';
import Template from './template';

const Sidebar = (prop) => (
  <Template {...prop} />
);

Sidebar.propTypes = {
  label: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};
/* eslint-enable sort-keys */

Sidebar.defaultProps = {
  size: 'small',
  label: 'Label',
};

export { Sidebar as default };
