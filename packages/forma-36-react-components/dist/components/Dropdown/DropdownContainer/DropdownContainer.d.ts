import React from 'react';
import { positionType } from '../Dropdown';
export interface DropdownContainerProps extends React.HTMLAttributes<HTMLElement> {
    children?: React.ReactNode;
    className?: string;
    getRef?: (ref: HTMLElement | null) => void;
    isOpen: boolean;
    onClose?: Function;
    openSubmenu?: (value: boolean) => void;
    position?: positionType;
    submenu?: boolean;
    testId?: string;
}
export declare const DropdownContainer: React.ForwardRefExoticComponent<DropdownContainerProps & React.RefAttributes<HTMLElement>>;
export default DropdownContainer;
