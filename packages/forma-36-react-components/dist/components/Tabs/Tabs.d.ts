import React, { Component, CSSProperties } from 'react';
export interface TabsProps {
    role?: 'navigation' | 'tablist';
    style?: CSSProperties;
    className?: string;
    withDivider?: boolean;
    children?: React.ReactNode;
    testId?: string;
}
export declare class Tabs extends Component<TabsProps> {
    static defaultProps: Partial<TabsProps>;
    render(): JSX.Element;
}
export default Tabs;
