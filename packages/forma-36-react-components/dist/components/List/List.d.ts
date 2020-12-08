import React, { Component } from 'react';
export interface ListProps {
    className?: string;
    children: React.ReactNode;
    style?: React.CSSProperties;
    testId?: string;
}
export declare class List extends Component<ListProps> {
    static defaultProps: Partial<ListProps>;
    render(): JSX.Element;
}
export default List;
