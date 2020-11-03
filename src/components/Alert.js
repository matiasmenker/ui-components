import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

import theme from '../styles/theme';
import { StyledAlert } from '../styles/components/StyledAlert';
import Icon from './Icon';

const propTypes = {
  type: PropTypes.oneOf(['warning', 'info', 'success', 'error']).isRequired,
  message: PropTypes.string.isRequired,
  theme: PropTypes.shape({}),
  closable: PropTypes.bool,
  showIcon: PropTypes.bool,
  description: PropTypes.string,
  onClose: PropTypes.func,
};

const defaultProps = {
  theme: theme,
  closable: false,
  showIcon: false,
  type: 'warning',
};

export const Alert = props => {
  const { type, closable, message, description, showIcon, onClose } = props;
  const [closed, setClosed] = useState(false);
  let renderIcon = null;
  switch (type) {
    case 'warning':
      renderIcon = 'circle_info_outline';
      break;
    case 'info':
      renderIcon = 'alert_sign';
      break;
    case 'success':
      renderIcon = 'circle_check_outline';
      break;
    case 'error':
      renderIcon = 'circle_delete_outline';
      break;
    default:
      break;
  }
  const handleClose = e => {
    setClosed(true);
    onClose && onClose(e);
  };
  return closed ? null : (
    <StyledAlert data-testid="alert" role="alert" {...props}>
      <span data-testid="alert-message" className="message">
        {showIcon && (
          <Icon
            name={renderIcon}
            size="medium"
            className="icon"
            data-testid={`alert-icon-${type}`}
          />
        )}
        {message}
      </span>
      {description && (
        <span data-testid="alert-description" className="description">
          {description}
        </span>
      )}
      {closable ? (
        <Icon
          onClick={handleClose}
          name="close"
          size="medium"
          className="icon-close"
          data-testid="alert-icon-close"
        />
      ) : null}
    </StyledAlert>
  );
};

StyledAlert.displayName = 'StyledAlert';

Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;

export default withTheme(Alert);
