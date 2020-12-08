import React, { Component } from 'react';
export interface ListItemProps {
    className?: string;
    children: React.ReactNode;
    testId?: string;
}
export declare class ListItem extends Component<ListItemProps> {
    static defaultProps: Partial<ListItemProps>;
    render(): JSX.Element;
}
export default ListItem;
