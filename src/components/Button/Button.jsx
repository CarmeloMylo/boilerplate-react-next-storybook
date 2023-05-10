import React from 'react';
import PropTypes from 'prop-types';
//import styles from '../../styles/Button.module.scss';
import './button.scss';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, backgroundColor, color, size, label, ...props }) => {
  const mode = primary ? 'btn-primary' : 'btn-secondary';
  return (
    <button
      type="button"
      className={['btn', `storybook-button--${size}`, mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
  color: PropTypes.string,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
  color: null,
};
