import React, { Component } from 'react';
import { IconProps } from '../Icon';
export interface IconButtonProps extends React.HTMLAttributes<HTMLElement> {
    label: string;
    href?: string;
    iconProps: IconProps;
    disabled?: boolean;
    buttonType?: 'primary' | 'positive' | 'negative' | 'secondary' | 'muted' | 'white';
    withDropdown?: boolean;
    className?: string;
    testId?: string;
}
export declare class IconButton extends Component<IconButtonProps> {
    static defaultProps: Partial<IconButtonProps>;
    render(): JSX.Element;
}
export default IconButton;
