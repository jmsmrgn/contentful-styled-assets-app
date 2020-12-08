import React, { Component } from 'react';
export interface TypographyProps {
    className?: string;
    children?: React.ReactNode;
    style?: React.CSSProperties;
    testId?: string;
}
export declare const TypographyContext: React.Context<{}>;
export declare class Typography extends Component<TypographyProps> {
    static defaultProps: Partial<TypographyProps>;
    render(): JSX.Element;
}
export default Typography;
