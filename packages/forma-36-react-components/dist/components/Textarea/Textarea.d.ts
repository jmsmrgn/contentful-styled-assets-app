import React, { Component, FocusEventHandler, ChangeEventHandler, KeyboardEventHandler, RefObject } from 'react';
export interface TextareaProps {
    name?: string;
    id?: string;
    testId?: string;
    placeholder?: string;
    className?: string;
    width?: 'small' | 'medium' | 'large' | 'full';
    maxLength?: number;
    required?: boolean;
    disabled?: boolean;
    value?: string;
    rows?: number;
    error?: boolean;
    onChange?: ChangeEventHandler<HTMLTextAreaElement>;
    onBlur?: FocusEventHandler<HTMLTextAreaElement>;
    onFocus?: FocusEventHandler<HTMLTextAreaElement>;
    onKeyPress?: KeyboardEventHandler<HTMLTextAreaElement>;
    onKeyDown?: KeyboardEventHandler<HTMLTextAreaElement>;
    onKeyUp?: KeyboardEventHandler<HTMLTextAreaElement>;
    willBlurOnEsc?: boolean;
    textareaRef?: RefObject<HTMLTextAreaElement>;
}
export interface TextareaState {
    value?: string;
}
export declare class Textarea extends Component<TextareaProps, TextareaState> {
    static defaultProps: Partial<TextareaProps>;
    state: {
        value: string | undefined;
    };
    UNSAFE_componentWillReceiveProps(nextProps: TextareaProps): void;
    handleKeyDown: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
    render(): JSX.Element;
}
export default Textarea;
