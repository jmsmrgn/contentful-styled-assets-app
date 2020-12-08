import React, { MouseEvent, FocusEvent } from 'react';
import { Placement } from '@popperjs/core';
import * as CSS from 'csstype';
export declare type TooltipPlace = Placement;
export interface TooltipProps {
    /**
     * Child nodes to be rendered in the component and that will show the tooltip when they are hovered
     */
    children: React.ReactNode;
    /**
     * Class names to be appended to the className prop of the Tooltip wrapper
     */
    className?: string;
    /**
     * HTML element used to wrap the target of the Tooltip
     */
    containerElement?: React.ElementType;
    /**
     * Content of the Tooltip
     */
    content?: React.ReactNode;
    id?: string;
    /**
     * It controls the initial visibility of the Tooltip
     */
    isVisible?: boolean;
    /**
     * It sets a max-width for the Tooltip
     */
    maxWidth?: number | CSS.MaxWidthProperty<string>;
    /**
     * Function that will be called when target gets blurred
     */
    onBlur?: (evt: FocusEvent) => void;
    /**
     * Function that will be called when target gets focused
     */
    onFocus?: (evt: FocusEvent) => void;
    /**
     * Function that will be called when the user move the mouse out of the target
     */
    onMouseLeave?: (evt: MouseEvent) => void;
    /**
     * Function that will be called when the user move the mouse over of the target
     */
    onMouseOver?: (evt: MouseEvent) => void;
    /**
     * It sets the "preferred" position of the Tooltip
     */
    place?: TooltipPlace;
    /**
     * Class names to be appended to the className prop of the Tooltip’s target
     */
    targetWrapperClassName?: string;
    /**
     * An ID used for testing purposes applied as a data attribute (data-test-id)
     */
    testId?: string;
}
export declare const Tooltip: {
    ({ children, className, containerElement: ContainerElement, content, id, isVisible, maxWidth, onBlur, onFocus, onMouseLeave, onMouseOver, place, targetWrapperClassName, testId, ...otherProps }: TooltipProps): JSX.Element;
    defaultProps: {
        containerElement: string;
        isVisible: boolean;
        maxWidth: number;
        testId: string;
        place: string;
    };
};
export default Tooltip;
