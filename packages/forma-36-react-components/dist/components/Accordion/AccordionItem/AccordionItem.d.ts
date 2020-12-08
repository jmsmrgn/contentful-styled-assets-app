import React, { FC } from 'react';
export interface AccordionItemProps {
    /**
     * The accordion title
     */
    title: React.ReactNode;
    /**
     * The heading element that will be used by the AccordionHeader
     */
    titleElement?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    /**
     * The children of the AccordionItem are in fact the content of the accordion
     */
    children?: React.ReactNode;
    /**
     * An ID used for testing purposes applied as a data attribute (data-test-id)
     */
    testId?: string;
    /**
     * A function to be called when the accordion item is opened
     */
    onExpand?: Function;
    /**
     * A function to be called when the accordion item is closed
     */
    onCollapse?: Function;
}
export declare const AccordionItem: FC<AccordionItemProps>;
export default AccordionItem;
