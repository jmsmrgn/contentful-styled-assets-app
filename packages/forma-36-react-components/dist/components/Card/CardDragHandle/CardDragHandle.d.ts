import React, { Component } from 'react';
export interface CardDragHandlePropTypes {
    /**
     * Label rendered as child in CardDragHandle - not visible on screen as
     * purpose is for screen readers only
     */
    children: React.ReactNode;
    /**
     * Class names to be appended to the className prop of the component
     */
    className?: string;
    /**
     * An ID used for testing purposes applied as a data attribute (data-test-id)
     */
    testId?: string;
    /**
     * Applies styling for when the component is actively being dragged by the user
     */
    isDragActive?: boolean;
}
export declare class CardDragHandle extends Component<CardDragHandlePropTypes> {
    static defaultProps: Partial<CardDragHandlePropTypes>;
    render(): JSX.Element;
}
export default CardDragHandle;
