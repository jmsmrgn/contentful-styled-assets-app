import React, { Component, EventHandler, ChangeEvent, FocusEvent } from 'react';
export interface ControlledInputPropTypes {
    id?: string;
    required?: boolean;
    labelText: string;
    checked?: boolean;
    onChange?: EventHandler<ChangeEvent<HTMLInputElement>>;
    name?: string;
    onBlur?: EventHandler<FocusEvent<HTMLInputElement>>;
    onFocus?: EventHandler<FocusEvent<HTMLInputElement>>;
    value?: string;
    disabled?: boolean;
    type?: 'checkbox' | 'radio';
    className?: string;
    testId?: string;
    willBlurOnEsc: boolean;
}
export declare class ControlledInput extends Component<ControlledInputPropTypes> {
    static defaultProps: Partial<ControlledInputPropTypes>;
    handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    render(): JSX.Element;
}
export default ControlledInput;
