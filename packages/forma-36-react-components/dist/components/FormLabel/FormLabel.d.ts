import React, { Component } from 'react';
export interface FormLabelProps {
    htmlFor: string;
    children: React.ReactNode;
    testId?: string;
    className?: string;
    requiredText?: string;
    required?: boolean;
}
export declare class FormLabel extends Component<FormLabelProps> {
    static defaultProps: Partial<FormLabelProps>;
    render(): JSX.Element;
}
export default FormLabel;
