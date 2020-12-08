import React, { Component } from 'react';
export interface ModalHeaderProps {
    title: string;
    onClose?: Function;
    testId?: string;
    className?: string;
    isNotWrapped?: boolean;
    style?: React.CSSProperties;
}
export declare class ModalHeader extends Component<ModalHeaderProps> {
    static defaultProps: Partial<ModalHeaderProps>;
    render(): JSX.Element;
}
export default ModalHeader;
