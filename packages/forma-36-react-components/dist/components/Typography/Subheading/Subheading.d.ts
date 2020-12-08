import React, { Component } from 'react';
export interface SubheadingProps {
    element?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
    className?: string;
    children?: React.ReactNode;
    testId?: string;
    style?: React.CSSProperties;
}
export declare class Subheading extends Component<SubheadingProps> {
    static defaultProps: Partial<SubheadingProps>;
    render(): JSX.Element;
}
export default Subheading;
