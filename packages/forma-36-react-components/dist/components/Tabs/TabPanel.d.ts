import React, { Component } from 'react';
export interface TabPanelProps {
    id: string;
    className?: string;
    testId?: string;
    style?: React.CSSProperties;
    children: React.ReactNode;
}
export declare class TabPanel extends Component<TabPanelProps> {
    static defaultProps: Partial<TabPanelProps>;
    render(): JSX.Element;
}
export default TabPanel;
