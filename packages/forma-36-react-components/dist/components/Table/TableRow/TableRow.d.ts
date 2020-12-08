import React, { Component } from 'react';
export interface TableRowProps {
    className?: string;
    style?: React.CSSProperties;
    testId?: string;
    children: React.ReactNode;
}
export declare class TableRow extends Component<TableRowProps> {
    static defaultProps: Partial<TableRowProps>;
    render(): JSX.Element;
}
export default TableRow;
