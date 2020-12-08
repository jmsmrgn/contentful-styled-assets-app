import React, { Component } from 'react';
export interface ModalControlsProps {
    testId?: string;
    className?: string;
    children: React.ReactNode;
    style?: React.CSSProperties;
}
export declare class ModalControls extends Component<ModalControlsProps> {
    static defaultProps: Partial<ModalControlsProps>;
    render(): JSX.Element;
}
export default ModalControls;
