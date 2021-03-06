import React, { Component } from 'react';
import cn from 'classnames';

import styles from './ModalControls.css';

export interface ModalControlsProps {
  testId?: string;
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const defaultProps: Partial<ModalControlsProps> = {
  testId: 'cf-ui-modal-controls',
};

export class ModalControls extends Component<ModalControlsProps> {
  static defaultProps = defaultProps;

  render() {
    const { testId, className, children, ...rest } = this.props;
    return (
      <div
        {...rest}
        className={cn(styles.ModalControls, className)}
        data-test-id={testId}
      >
        {children}
      </div>
    );
  }
}

export default ModalControls;
