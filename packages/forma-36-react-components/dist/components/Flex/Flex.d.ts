import React from 'react';
import * as CSS from 'csstype';
export declare type SpacingTypes = 'none' | 'spacing2xs' | 'spacingXs' | 'spacingS' | 'spacingM' | 'spacingL' | 'spacingXl' | 'spacing2Xl' | 'spacing3Xl' | 'spacing4Xl';
export interface FlexProps {
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
     * Html tag used as container
     */
    htmlTag?: React.ElementType;
    /**
     * Sets width: 100% */
    fullWidth?: boolean;
    /**
     * Sets hegiht: 100% */
    fullHeight?: boolean;
    /**
     * Sets display:inline-flex */
    inlineFlex?: boolean;
    /**
     * Sets flex-shrink: 0 */
    noShrink?: boolean;
    /**
     * One of flex-wrap css values */
    flexWrap?: CSS.FlexWrapProperty;
    /**
     * One of flex-direction css values */
    flexDirection?: CSS.FlexDirectionProperty;
    /**
     * One of flex-grow css values */
    flexGrow?: CSS.GlobalsNumber;
    /**
     * One of justify-content css values */
    justifyContent?: CSS.JustifyContentProperty;
    /**
     * One of justify-content css values */
    justifyItems?: CSS.JustifyContentProperty;
    /**
     * One of justify-self css values */
    justifySelf?: CSS.JustifySelfProperty;
    /**
     * One of align-items css values */
    alignItems?: CSS.AlignItemsProperty;
    /**
     * One of align-self css values */
    alignSelf?: CSS.AlignItemsProperty;
    /**
     * sets margin to one of the corresponding spacing tokens, default is none */
    margin?: SpacingTypes;
    /**
     * sets margin-top to one of the corresponding spacing tokens, default is none */
    marginTop?: SpacingTypes;
    /**
     * sets margin-right to one of the corresponding spacing tokens, default is none */
    marginRight?: SpacingTypes;
    /**
     * sets margin-bottom to one of the corresponding spacing tokens, default is none */
    marginBottom?: SpacingTypes;
    /**
     * sets margin-left to one of the corresponding spacing tokens, default is none */
    marginLeft?: SpacingTypes;
    /**
     * sets padding to one of the corresponding spacing tokens, default is none */
    padding?: SpacingTypes;
    /**
     * sets padding-top to one of the corresponding spacing tokens, default is none */
    paddingTop?: SpacingTypes;
    /**
     * sets padding-right to one of the corresponding spacing tokens, default is none */
    paddingRight?: SpacingTypes;
    /**
     * sets padding-bottom to one of the corresponding spacing tokens, default is none */
    paddingBottom?: SpacingTypes;
    /**
     * sets padding-left to one of the corresponding spacing tokens, default is none */
    paddingLeft?: SpacingTypes;
    /**
     * style prop, for inline styles */
    style?: React.CSSProperties;
}
export declare const Flex: {
    (props: FlexProps): JSX.Element;
    defaultProps: {
        testId: string;
    };
};
export default Flex;
