import * as React from 'react';
import PropTypes from 'prop-types';
import Template from './template';

const Button = (prop) => (
  <Template {...prop} />
);

Button.propTypes = {
  label: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};
/* eslint-enable sort-keys */

Button.defaultProps = {
  size: 'small',
  label: 'Label',
};

/* eslint-disable sort-keys */
// Button.propTypes = {
//   onClick: PropTypes.func,
//   disabled: PropTypes.bool,
//   type: PropTypes.oneOf(['primary', 'secondary', 'success', 'error', 'warning']),
//   mode: PropTypes.oneOf(['filled', 'ghost', 'minimal', 'flat']),
//   /** @uxpinignoreprop */
//   title: PropTypes.string,
//   /** @uxpinignoreprop */
//   background: PropTypes.string,
//   /**
//    * @uxpinpropname Label
//    */
//   children: PropTypes.string,
//   icon: PropTypes.node,
//   iconDirection: PropTypes.oneOf(['left', 'right']),
//   size: PropTypes.oneOf(['xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl']),
//   stretched: PropTypes.bool,
// };
// /* eslint-enable sort-keys */

// Button.defaultProps = {
//   disabled: false,
//   iconDirection: 'left',
//   mode: 'filled',
//   size: 'm',
//   stretched: true,
//   type: 'primary',
// };

export { Button as default };
