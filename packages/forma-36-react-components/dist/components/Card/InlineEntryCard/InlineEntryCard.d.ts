import React, { Component } from 'react';
export interface InlineEntryCardPropTypes {
    /**
     * Gives the component a selected state
     */
    isSelected?: boolean;
    /**
     * The DropdownList elements used to render an actions dropdown for the component
     */
    dropdownListElements?: React.ReactElement;
    /**
     * Loading state for the component - when true will display loading feedback to the user
     */
    isLoading?: boolean;
    /**
     * The publish status of the entry
     */
    status?: 'archived' | 'changed' | 'draft' | 'published';
    /**
     * Class names to be appended to the className prop of the component
     */
    className?: string;
    /**
     * An ID used for testing purposes applied as a data attribute (data-test-id)
     */
    testId?: string;
    href?: string;
    /**
     * Child nodes to be rendered in the component
     */
    children: React.ReactNode;
}
export declare class InlineEntryCard extends Component<InlineEntryCardPropTypes> {
    static defaultProps: Partial<InlineEntryCardPropTypes>;
    render(): JSX.Element;
}
export default InlineEntryCard;
