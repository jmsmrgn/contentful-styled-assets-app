import React, { Component } from 'react';
export interface DisplayTextProps {
    element?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
    size?: 'default' | 'large';
    className?: string;
    children?: React.ReactNode;
    style?: React.CSSProperties;
    testId?: string;
}
export declare class DisplayText extends Component<DisplayTextProps> {
    static defaultProps: Partial<DisplayTextProps>;
    render(): JSX.Element;
}
export default DisplayText;
