import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import { GeneralPropTypes, DefaultGeneralPropTypes } from 'utils/propTypes';
import Icon from 'components/Icon';

import { StyledModal } from 'styles/components/StyledModal';

const propTypes = {
  ...GeneralPropTypes,
  width: PropTypes.string,
  height: PropTypes.string,
  onMaskClick: PropTypes.func,
  onClose: PropTypes.func,
  onEscape: PropTypes.func,
  visible: PropTypes.bool,
  closable: PropTypes.bool,
};

const defaultProps = {
  ...DefaultGeneralPropTypes,
  width: '600px',
  height: 'auto',
  visible: false,
  closable: true,
};

export class Modal extends PureComponent {
  componentWillMount() {
    window.addEventListener('keydown', this.keyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.keyDown);
  }

  keyDown = e => {
    const { onEscape } = this.props;
    if (e.key === 'Escape') {
      onEscape(e);
    }
  };

  close = e => {
    const { onClose } = this.props;
    if (onClose) {
      onClose(e);
    }
  };

  render() {
    const {
      visible,
      width,
      height,
      theme,
      closable,
      onMaskClick,
      children,
    } = this.props;
    const containerClass = visible ? 'container' : 'containerHidden';
    const panelClass = visible ? 'panel' : 'panelHidden';
    const maskClass = visible ? 'mask' : 'maskHidden';
    return (
      <StyledModal width={width} height={height} theme={theme}>
        <div className={containerClass}>
          <div className={panelClass}>
            {closable && (
              <button type="button" onClick={this.close} className="close-icon">
                <Icon name="close" color="gray300" size="medium" />
              </button>
            )}
            {children}
          </div>
          <div className={maskClass} onClick={onMaskClick} />
        </div>
      </StyledModal>
    );
  }
}

StyledModal.displayName = 'StyledModal';

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

export default withTheme(Modal);
