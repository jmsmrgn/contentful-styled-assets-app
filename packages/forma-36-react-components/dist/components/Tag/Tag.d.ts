import React, { Component } from 'react';
export declare type TagType = 'primary' | 'positive' | 'negative' | 'warning' | 'secondary' | 'muted';
declare type Status = 'published' | 'draft' | 'archived' | 'changed' | 'deleted';
export interface TagProps {
    tagType?: TagType;
    style?: React.CSSProperties;
    className?: string;
    testId?: string;
    children: React.ReactNode;
    entityStatusType?: Status;
}
export declare class Tag extends Component<TagProps> {
    static defaultProps: Partial<TagProps>;
    render(): JSX.Element;
}
export default Tag;
