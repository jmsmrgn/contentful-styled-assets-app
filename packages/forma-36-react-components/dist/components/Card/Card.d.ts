import React, { Component, MouseEventHandler } from 'react';
export interface BaseCardProps {
    /**
     * Used to make the decision of either rendering the card as a link tag or as a div tag
     */
    href?: string;
    /**
     * Used with href to specify target attribute value
     */
    target?: React.AnchorHTMLAttributes<HTMLAnchorElement>['target'];
    /**
     * Applies selected styles to the element
     */
    selected?: boolean;
    /**
     * An ID used for testing purposes applied as a data attribute (data-test-id)
     */
    testId?: string;
    /**
     * Class names to be appended to the className prop of the component
     */
    className?: string;
}
interface CardPropTypes extends BaseCardProps {
    /**
     * The action to be performed on click of the Card component
     */
    onClick?: MouseEventHandler<HTMLElement>;
    /**
     * Applies padding styles of different sizes
     */
    padding?: 'default' | 'large' | 'none';
    /**
     * The title of the entry
     */
    title?: string;
    /**
     * Any additional styles that are being applied
     */
    style?: React.CSSProperties;
    children: React.ReactNode;
}
export declare class Card extends Component<CardPropTypes> {
    static defaultProps: Partial<CardPropTypes>;
    handleClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    render(): React.DetailedReactHTMLElement<{
        title?: string | undefined;
        style?: React.CSSProperties | undefined;
        href: string | undefined;
        target: string | undefined;
        className: string;
        'data-test-id': string | undefined;
    }, HTMLElement>;
}
export default Card;
