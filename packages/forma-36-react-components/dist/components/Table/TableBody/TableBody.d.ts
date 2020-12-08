import React, { Component } from 'react';
export interface TableBodyProps {
    className?: string;
    style?: React.CSSProperties;
    testId?: string;
    children: React.ReactNode;
}
export declare class TableBody extends Component<TableBodyProps> {
    static defaultProps: Partial<TableBodyProps>;
    render(): JSX.Element;
}
export default TableBody;
