import * as React from 'react';
import PropTypes from 'prop-types';
import Template from './template';

const Header = (prop) => (
  <Template {...prop} />
);

Header.propTypes = {
  label: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};
/* eslint-enable sort-keys */

Header.defaultProps = {
  size: 'small',
  label: 'Label',
};

export { Header as default };
