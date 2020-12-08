import React, { Component } from 'react';
export interface FieldGroupProps {
    className?: string;
    children: React.ReactNode;
    style?: React.CSSProperties;
    testId?: string;
    row?: boolean;
}
export declare class FieldGroup extends Component<FieldGroupProps> {
    static defaultProps: Partial<FieldGroupProps>;
    render(): JSX.Element;
}
export default FieldGroup;
