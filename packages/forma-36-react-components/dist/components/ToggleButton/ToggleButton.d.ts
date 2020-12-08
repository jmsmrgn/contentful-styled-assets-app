import React, { Component } from 'react';
import { IconType } from '../Icon/Icon';
export interface ToggleButtonProps {
    children: React.ReactNode;
    icon?: IconType;
    isActive?: boolean;
    onToggle?: Function;
    isDisabled?: boolean;
    testId?: string;
    className?: string;
}
export declare class ToggleButton extends Component<ToggleButtonProps> {
    static defaultProps: Partial<ToggleButtonProps>;
    handleToggle: () => void;
    render(): JSX.Element;
}
export default ToggleButton;
