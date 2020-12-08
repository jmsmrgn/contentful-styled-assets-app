import React, { Component } from 'react';
import { sortingDirections } from '../TableCell/TableCell';
export interface TableSortingLabelProps {
    children: React.ReactNode;
    direction: keyof typeof sortingDirections;
    active: boolean;
    className?: string;
    testId?: string;
}
export declare class TableSortingLabel extends Component<TableSortingLabelProps> {
    static defaultProps: Partial<TableSortingLabelProps>;
    renderIcon(): JSX.Element;
    render(): JSX.Element;
}
export default TableSortingLabel;
