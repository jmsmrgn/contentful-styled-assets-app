import React, { Component, CSSProperties, MouseEventHandler } from 'react';
export interface TabProps {
    id: string;
    onSelect?: (id: string, e: React.SyntheticEvent) => void;
    selected?: boolean;
    href?: string;
    target?: string;
    disabled?: boolean;
    tabIndex?: number;
    style?: CSSProperties;
    className?: string;
    testId?: string;
    children: React.ReactNode;
}
export declare class Tab extends Component<TabProps> {
    static defaultProps: Partial<TabProps>;
    onClick: MouseEventHandler;
    onKeyPress: (e: React.KeyboardEvent<HTMLElement>) => void;
    render(): JSX.Element;
}
export default Tab;
