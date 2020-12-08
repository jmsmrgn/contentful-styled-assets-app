import React from 'react';
export interface EntityListProps {
    /**
     * Class names to be appended to the className prop of the component
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
export declare const EntityList: React.ForwardRefExoticComponent<EntityListProps & React.RefAttributes<HTMLUListElement>>;
export default EntityList;
