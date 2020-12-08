import React, { Component, FormEventHandler } from 'react';
export interface FormProps {
    onSubmit?: FormEventHandler;
    spacing?: 'condensed' | 'default';
    testId?: string;
    style?: React.CSSProperties;
    className?: string;
    children: React.ReactChild | React.ReactNodeArray;
}
export declare class Form extends Component<FormProps> {
    static defaultProps: Partial<FormProps>;
    handleSubmit: (event: React.FormEvent<Element>) => void;
    render(): JSX.Element;
}
export default Form;
