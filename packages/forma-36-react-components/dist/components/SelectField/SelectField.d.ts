import React, { Component, FocusEventHandler, ChangeEventHandler } from 'react';
import { FormLabelProps } from '../FormLabel';
import { SelectProps } from '../Select';
import { TextLinkProps } from '../TextLink';
export interface SelectFieldProps {
    name: string;
    id: string;
    labelText: string;
    children: React.ReactNode;
    value?: string;
    validationMessage?: string;
    formLabelProps?: Partial<FormLabelProps>;
    textLinkProps?: Partial<TextLinkProps>;
    selectProps?: Partial<SelectProps>;
    helpText?: string;
    required?: boolean;
    onChange?: ChangeEventHandler;
    onBlur?: FocusEventHandler;
    testId?: string;
    className?: string;
}
export interface SelectFieldState {
    value?: string;
}
export declare class SelectField extends Component<SelectFieldProps, SelectFieldState> {
    static defaultProps: Partial<SelectFieldProps>;
    state: {
        value: string | undefined;
    };
    UNSAFE_componentWillReceiveProps(nextProps: SelectFieldProps): void;
    handleOnChange: (evt: React.ChangeEvent<Element>) => void;
    render(): JSX.Element;
}
export default SelectField;
