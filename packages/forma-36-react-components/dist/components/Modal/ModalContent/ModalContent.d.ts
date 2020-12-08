import React, { Component } from 'react';
export interface ModalContentProps {
    testId?: string;
    className?: string;
    children: React.ReactNode;
    style?: React.CSSProperties;
}
export declare class ModalContent extends Component<ModalContentProps> {
    static defaultProps: Partial<ModalContentProps>;
    render(): JSX.Element;
}
export default ModalContent;
