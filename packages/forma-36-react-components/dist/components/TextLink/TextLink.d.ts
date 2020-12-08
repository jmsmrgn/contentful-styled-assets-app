import React, { Component, MouseEventHandler } from 'react';
import { IconType } from '../Icon';
export declare type TextLinkType = 'primary' | 'positive' | 'negative' | 'secondary' | 'muted' | 'white';
declare type IconPositionType = 'right' | 'left';
export interface TextLinkProps {
    children?: React.ReactNode;
    linkType?: TextLinkType;
    href?: React.AnchorHTMLAttributes<HTMLAnchorElement>['href'];
    target?: React.AnchorHTMLAttributes<HTMLAnchorElement>['target'];
    rel?: React.AnchorHTMLAttributes<HTMLInputElement>['rel'];
    disabled?: boolean;
    testId?: string;
    onClick?: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
    className?: string;
    icon?: IconType;
    text?: string;
    iconPosition?: IconPositionType;
}
export declare class TextLink extends Component<TextLinkProps> {
    static defaultProps: Partial<TextLinkProps>;
    renderIcon(icon: IconType, linkType: TextLinkType): JSX.Element | undefined;
    render(): JSX.Element;
}
export default TextLink;
