import React, { Component, ChangeEventHandler, FocusEventHandler } from 'react';
export interface SelectProps {
    required?: boolean;
    name?: string;
    id?: string;
    hasError?: boolean;
    value?: string;
    isDisabled?: boolean;
    onChange?: ChangeEventHandler<HTMLSelectElement>;
    onBlur?: FocusEventHandler<HTMLSelectElement>;
    onFocus?: FocusEventHandler<HTMLSelectElement>;
    width?: 'auto' | 'small' | 'medium' | 'large' | 'full';
    testId?: string;
    className?: string;
    children: React.ReactNode;
    willBlurOnEsc?: boolean;
}
export interface SelectState {
    value?: string;
}
export declare class Select extends Component<SelectProps, SelectState> {
    static defaultProps: Partial<SelectProps>;
    state: {
        value: string | undefined;
    };
    UNSAFE_componentWillReceiveProps(nextProps: SelectProps): void;
    handleKeyDown: (e: React.KeyboardEvent<HTMLSelectElement>) => void;
    render(): JSX.Element;
}
export default Select;
