import React, { Component } from 'react';
export interface SectionHeadingProps {
    element?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
    className?: string;
    children?: React.ReactNode | string;
    testId?: string;
    style?: React.CSSProperties;
}
export declare class SectionHeading extends Component<SectionHeadingProps> {
    static defaultProps: Partial<SectionHeadingProps>;
    render(): JSX.Element;
}
export default SectionHeading;
