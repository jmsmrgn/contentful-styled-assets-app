import React from 'react';
export interface AccordionProps {
    /**
     * Specify the alignment of the chevron inside the accordion header
     */
    align?: 'start' | 'end';
    /**
     * Class names to be appended to the className prop of the Accordion wrapper
     */
    className?: string;
    /**
     * Child nodes to be rendered in the component
     */
    children?: React.ReactNode;
    /**
     * An ID used for testing purposes applied as a data attribute (data-test-id)
     */
    testId?: string;
}
export declare const Accordion: {
    ({ align, children, className, testId, ...otherProps }: AccordionProps): JSX.Element;
    defaultProps: {
        align: string;
        testId: string;
    };
};
export default Accordion;
