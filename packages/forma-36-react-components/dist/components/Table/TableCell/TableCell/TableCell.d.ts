import React, { Component } from 'react';
export declare const sortingDirections: {
    asc: string;
    desc: string;
};
export declare type TableCellSorting = keyof typeof sortingDirections | boolean;
export interface TableCellProps {
    align?: 'center' | 'left' | 'right';
    sorting?: TableCellSorting;
    style?: React.CSSProperties;
    className?: string;
    testId?: string;
    children?: React.ReactNode;
}
export declare class TableCell extends Component<TableCellProps> {
    static defaultProps: Partial<TableCellProps>;
    render(): JSX.Element;
}
export default TableCell;
