import React, { Component } from 'react';
export interface ValidationMessageProps {
    className?: string;
    testId?: string;
    style?: React.CSSProperties;
    children: React.ReactNode;
}
export declare class ValidationMessage extends Component<ValidationMessageProps> {
    static defaultProps: Partial<ValidationMessageProps>;
    render(): JSX.Element;
}
export default ValidationMessage;
