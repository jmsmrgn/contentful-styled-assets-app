import React, { Component, ChangeEventHandler, FocusEventHandler } from 'react';
import { FormLabelProps } from '../FormLabel';
import { TextInputProps } from '../TextInput';
import { TextLinkProps } from '../TextLink';
import { TextareaProps } from '../Textarea';
export interface TextFieldProps {
    name: string;
    id: string;
    width?: string;
    labelText: string;
    value?: string;
    validationMessage?: string;
    testId?: string;
    className?: string;
    formLabelProps?: Partial<FormLabelProps>;
    textLinkProps?: Partial<TextLinkProps>;
    textInputProps?: Partial<TextInputProps> | Partial<TextareaProps>;
    helpText?: string;
    required?: boolean;
    textarea?: boolean;
    countCharacters?: boolean;
    onChange?: ChangeEventHandler;
    onBlur?: FocusEventHandler;
    onFocus?: FocusEventHandler;
}
export interface TextFieldState {
    value?: string;
    initialValue?: string;
}
export declare class TextField extends Component<TextFieldProps, TextFieldState> {
    static defaultProps: Partial<TextFieldProps>;
    state: {
        value: string;
        initialValue: string | undefined;
    };
    handleOnChange: (evt: React.ChangeEvent<Element>) => void;
    static getDerivedStateFromProps(props: TextFieldProps, state: TextFieldState): TextFieldState;
    render(): JSX.Element;
}
export default TextField;
