import React, { Component } from 'react';
export interface HelpTextProps {
    className?: string;
    testId?: string;
    style?: React.CSSProperties;
    children: React.ReactNode;
}
export declare class HelpText extends Component<HelpTextProps> {
    static defaultProps: Partial<HelpTextProps>;
    render(): JSX.Element;
}
export default HelpText;
