import React, { FC } from 'react';
interface AccordionPanelProps {
    /**
     * Child nodes to be rendered in the component
     */
    children?: React.ReactNode;
    /**
     * A boolean that tells if the accordion should be expanded or collapsed
     */
    isExpanded: boolean;
    /**
     * An unique id that is necessary for the aria roles and properties
     */
    ariaId: number;
}
export declare const AccordionPanel: FC<AccordionPanelProps>;
export default AccordionPanel;
