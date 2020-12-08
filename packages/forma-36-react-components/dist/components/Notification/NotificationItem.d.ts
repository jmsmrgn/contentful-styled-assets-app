import React, { Component } from 'react';
import { TextLinkProps } from '../TextLink';
export declare type NotificationIntent = 'success' | 'error' | 'warning';
export interface NotificationCtaProps {
    label: string;
    textLinkProps: Partial<TextLinkProps>;
}
export interface NotificationItemProps {
    intent?: NotificationIntent;
    hasCloseButton?: boolean;
    onClose?: Function;
    testId?: string;
    children: React.ReactNode;
    title?: string;
    cta?: Partial<NotificationCtaProps>;
}
export declare class NotificationItem extends Component<NotificationItemProps> {
    static defaultProps: Partial<NotificationItemProps>;
    renderTitle(): JSX.Element;
    renderBody(): JSX.Element;
    renderCta(): JSX.Element | undefined;
    renderIcon(): JSX.Element;
    render(): JSX.Element;
}
export default NotificationItem;
