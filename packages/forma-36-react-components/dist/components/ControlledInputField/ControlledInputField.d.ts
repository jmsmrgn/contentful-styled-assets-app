import React, { Component, ChangeEventHandler } from 'react';
export interface ControlledInputFieldPropTypes {
    id: string;
    labelText: string;
    labelIsLight?: boolean;
    required?: boolean;
    helpText?: string;
    formLabelProps?: object;
    disabled?: boolean;
    helpTextProps?: object;
    validationMessage?: string;
    value?: string;
    name?: string;
    checked?: boolean;
    inputProps?: object;
    inputType?: 'radio' | 'checkbox';
    onChange?: ChangeEventHandler;
    className?: string;
    testId?: string;
    children?: React.ReactNode;
}
export declare class ControlledInputField extends Component<ControlledInputFieldPropTypes> {
    static defaultProps: Partial<ControlledInputFieldPropTypes>;
    render(): JSX.Element;
}
export default ControlledInputField;
