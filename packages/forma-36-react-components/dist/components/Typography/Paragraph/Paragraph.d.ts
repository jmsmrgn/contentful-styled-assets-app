import React, { Component } from 'react';
export interface ParagraphProps {
    element?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
    className?: string;
    children?: React.ReactNode;
    testId?: string;
    style?: React.CSSProperties;
}
export declare class Paragraph extends Component<ParagraphProps> {
    static defaultProps: Partial<ParagraphProps>;
    render(): JSX.Element;
}
export default Paragraph;
