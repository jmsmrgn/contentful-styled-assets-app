import React, { MouseEventHandler, FocusEventHandler } from 'react';
export interface DropdownListItemProps extends React.HTMLAttributes<HTMLElement> {
    isDisabled?: boolean;
    listItemRef?: React.MutableRefObject<HTMLLIElement | null>;
    isActive?: boolean;
    isTitle?: boolean;
    children: React.ReactNode;
    onClick?: MouseEventHandler;
    onMouseDown?: MouseEventHandler;
    submenuToggleLabel?: string;
    href?: string;
    onFocus?: FocusEventHandler;
    onLeave?: MouseEventHandler;
    onEnter?: MouseEventHandler;
    className?: string;
    testId?: string;
}
export declare const DropdownListItem: React.ForwardRefExoticComponent<DropdownListItemProps & React.RefAttributes<HTMLElement>>;
export default DropdownListItem;
