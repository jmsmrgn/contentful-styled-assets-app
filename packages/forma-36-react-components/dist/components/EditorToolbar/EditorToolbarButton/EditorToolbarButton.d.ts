import { Component, MouseEventHandler } from 'react';
import { IconButtonProps } from '../../IconButton';
import { IconType } from '../../Icon';
export interface EditorToolbarButtonProps {
    label: string;
    icon: IconType;
    tooltip?: string;
    iconButtonProps?: Partial<IconButtonProps>;
    isActive?: boolean;
    disabled?: boolean;
    onClick?: MouseEventHandler;
    withDropdown?: boolean;
    className?: string;
    testId?: string;
}
export declare class EditorToolbarButton extends Component<EditorToolbarButtonProps> {
    static defaultProps: Partial<EditorToolbarButtonProps>;
    render(): JSX.Element;
}
export default EditorToolbarButton;
