import React, { Component, CSSProperties, FocusEventHandler, MouseEventHandler } from 'react';
import { IconType } from '../Icon';
export interface ButtonProps {
    icon?: IconType;
    indicateDropdown?: boolean;
    onClick?: MouseEventHandler;
    isFullWidth?: boolean;
    onBlur?: FocusEventHandler;
    loading?: boolean;
    disabled?: boolean;
    testId?: string;
    buttonType?: 'primary' | 'positive' | 'negative' | 'warning' | 'muted' | 'naked';
    type?: 'button' | 'submit' | 'reset';
    size?: 'small' | 'large';
    href?: string;
    style?: CSSProperties;
    className?: string;
    children?: React.ReactNode;
    isActive?: boolean;
}
export declare class Button extends Component<ButtonProps> {
    static defaultProps: Partial<ButtonProps>;
    render(): JSX.Element;
}
export default Button;
