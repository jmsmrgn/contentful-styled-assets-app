import React, { Component } from 'react';
export interface TableHeadProps {
    isSticky?: boolean;
    offsetTop?: number | string;
    className?: string;
    testId?: string;
    style?: React.CSSProperties;
    children: React.ReactNode;
}
export declare class TableHead extends Component<TableHeadProps> {
    static defaultProps: Partial<TableHeadProps>;
    render(): JSX.Element;
}
export default TableHead;
