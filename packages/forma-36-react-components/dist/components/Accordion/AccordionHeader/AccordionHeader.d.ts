import React, { FC } from 'react';
interface AccordionHeaderProps {
    /**
     * Child nodes to be rendered in the component
     */
    children?: React.ReactNode;
    /**
     * An ID used for testing purposes applied as a data attribute (data-test-id)
     */
    testId?: string;
    /**
     * The function that will be called once the user clicks on the accordion title
     */
    handleClick: VoidFunction;
    /**
     * A boolean that tells if the accordion should be expanded or collapsed
     */
    isExpanded: boolean;
    /**
     * An unique id that is necessary for the aria roles and properties
     */
    ariaId: number | null;
    /**
     * The heading element that will be used by the Subheading component
     */
    element?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}
export declare const AccordionHeader: FC<AccordionHeaderProps>;
export default AccordionHeader;
