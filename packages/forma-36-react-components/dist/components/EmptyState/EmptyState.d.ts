import React, { Component } from 'react';
export interface EmptyStateProps {
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
    /**
     * Props for imageProps block
     */
    imageProps?: ImageProps;
    /**
     * As alternative,
     */
    customImageElement?: JSX.Element;
    /**
     * Heading text and semantic element type
     */
    headingProps: TextElementProps;
    /**
     * Description text and semantic element type
     */
    descriptionProps: TextElementProps;
}
interface TextElementProps {
    text: React.ReactNode;
    elementType?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
}
interface ImageProps {
    /**
     * Url of the illustration for empty state
     */
    url: string;
    /**
     * Width of the illustration for empty state, incl. unit
     * for example '200px'
     */
    width: string;
    /**
     * Height of the illustration for empty state, incl. unit
     * for example '200px'
     */
    height: string;
    /**
     * Image description
     */
    description: string;
    /**
     * Image class
     */
    className?: string;
}
export declare class EmptyState extends Component<EmptyStateProps> {
    static defaultProps: Partial<EmptyStateProps>;
    render(): JSX.Element;
}
export default EmptyState;
