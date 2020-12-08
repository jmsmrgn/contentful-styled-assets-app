import React from 'react';
export declare type positionType = 'top' | 'right' | 'left' | 'bottom-left' | 'bottom-right' | 'top-right' | 'top-left';
export interface DropdownProps {
    /**
     * Child nodes to be rendered in the component
     */
    children: React.ReactNode;
    /**
     * Class names to be appended to the className prop of the Dropdown wrapper
     */
    className?: string;
    /**
     * Class names to be appended to the className prop of the DropdownContainer
     */
    dropdownContainerClassName?: string;
    getContainerRef?: (ref: HTMLElement | null) => void;
    /**
     * Boolean to disable automatic positioning of the element to fit the
     * available viewport. Instead this forces the element to follow the given
     * or default value of the `position` prop.
     */
    isAutoalignmentEnabled?: boolean;
    /**
     * Boolean to determine if the Dropdown should take the full width of
     * the container
     */
    isFullWidth?: boolean;
    /**
     * Boolean to control whether or not the Dropdown is open
     */
    isOpen: boolean;
    /**
     * Callback function to run when the Dropdown closes
     */
    onClose?: Function;
    /**
     * Determines the preferred position of the Dropdown. This position is not
     * guaranteed, as the Dropdown might be moved to fit the viewport
     */
    position: positionType;
    /**
     * A text label to use as the toggle element for the submenu
     */
    submenuToggleLabel?: string;
    /**
     * An ID used for testing purposes applied as a data attribute (data-test-id)
     */
    testId?: string;
    /**
     * React element to use as the toggle, opening and closing the Dropdown
     */
    toggleElement?: React.ReactElement;
}
export declare function Dropdown({ children, className, dropdownContainerClassName, getContainerRef, isAutoalignmentEnabled, isFullWidth, isOpen: isOpenProp, onClose, position, submenuToggleLabel, testId, toggleElement, ...otherProps }: DropdownProps): JSX.Element;
export declare namespace Dropdown {
    var defaultProps: {
        testId: string;
        position: string;
        isAutoalignmentEnabled: boolean;
        isOpen: boolean;
        getContainerRef: () => void;
    };
}
export default Dropdown;
