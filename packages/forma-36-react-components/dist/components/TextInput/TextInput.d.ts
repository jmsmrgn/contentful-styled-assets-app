import React, { Component, RefObject } from 'react';
export declare type TextInputProps = {
    width?: 'small' | 'medium' | 'large' | 'full';
    isReadOnly?: boolean;
    type?: 'text' | 'password' | 'email' | 'number' | 'search' | 'url' | 'date' | 'time';
    name?: string;
    id?: string;
    className?: string;
    withCopyButton?: boolean;
    testId?: string;
    onCopy?: (value: string) => void;
    value?: string;
    inputRef?: RefObject<HTMLInputElement>;
    error?: boolean;
    willBlurOnEsc: boolean;
} & JSX.IntrinsicElements['input'];
export interface TextInputState {
    value?: string;
}
export declare class TextInput extends Component<TextInputProps, TextInputState> {
    static defaultProps: Partial<TextInputProps>;
    state: {
        value: string | (string & string[]) | undefined;
    };
    UNSAFE_componentWillReceiveProps(nextProps: TextInputProps): void;
    handleFocus: (e: React.FocusEvent<Element>) => void;
    handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    render(): JSX.Element;
}
export default TextInput;
