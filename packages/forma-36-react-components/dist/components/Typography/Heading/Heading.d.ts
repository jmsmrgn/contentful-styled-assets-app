import React, { Component } from 'react';
export interface HeadingProps {
    element?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
    style?: React.CSSProperties;
    className?: string;
    children?: React.ReactNode;
    testId?: string;
}
export declare class Heading extends Component<HeadingProps> {
    static defaultProps: Partial<HeadingProps>;
    render(): JSX.Element;
}
export default Heading;
