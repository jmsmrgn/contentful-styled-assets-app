import React, { Component } from 'react';
export interface OptionProps {
    value: string;
    children: React.ReactNode;
    testId?: string;
}
export declare class Option extends Component<OptionProps> {
    static defaultProps: Partial<OptionProps>;
    render(): JSX.Element;
}
export default Option;
