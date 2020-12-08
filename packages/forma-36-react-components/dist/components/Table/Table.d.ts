import React, { Component } from 'react';
export interface TableProps {
    testId?: string;
    className?: string;
    style?: React.CSSProperties;
    children: React.ReactNode;
}
export declare class Table extends Component<TableProps> {
    static defaultProps: Partial<TableProps>;
    render(): JSX.Element;
}
export default Table;
