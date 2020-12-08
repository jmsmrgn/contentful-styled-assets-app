import React from 'react';
import * as CSS from 'csstype';
export declare type GapTypes = 'none' | 'spacing2xs' | 'spacingXs' | 'spacingS' | 'spacingM' | 'spacingL' | 'spacingXl' | 'spacing2Xl' | 'spacing3Xl' | 'spacing4Xl';
export interface GridProps {
    /**
     * Class names to be appended to the className prop of the component */
    className?: string;
    /**
     * Child nodes to be rendered in the component */
    children?: React.ReactNode;
    /**
     * An ID used for testing purposes applied as a data attribute (data-test-id) */
    testId?: string;
    /**
     * Defines how many columns, default is `auto` */
    columns?: number | CSS.GridTemplateColumnsProperty<string>;
    /**
     * Defines how many rows, default is `auto` */
    rows?: number | CSS.GridTemplateColumnsProperty<string>;
    /**
     * Spaces between rows, corresponds to of spacing tokens values, default is none */
    rowGap?: GapTypes;
    /**
     * One of Spacing tokens values, default is 0 */
    columnGap?: GapTypes;
    /**
     * One of grid-auto-flow css values */
    flow?: CSS.GridAutoFlowProperty;
    /**
     * Sets display:inline-grid */
    inline?: boolean;
    /**
     * One of justify-content css values */
    justifyContent?: CSS.JustifyContentProperty;
    /**
     * One of justify-content css values */
    alignContent?: CSS.AlignContentProperty;
    /**
     * style prop, for inline styles */
    style?: React.CSSProperties;
}
export declare const Grid: {
    (props: GridProps): JSX.Element;
    defaultProps: {
        columns: string;
        rows: string;
        columnGap: string;
        rowGap: string;
        testId: string;
    };
};
export default Grid;
