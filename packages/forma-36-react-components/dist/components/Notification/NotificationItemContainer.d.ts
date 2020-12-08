/// <reference types="node" />
import { Component } from 'react';
import { NotificationItemProps } from './NotificationItem';
export interface NotificationItemContainerProps extends NotificationItemProps {
    duration?: number;
    isShown?: boolean;
}
export interface NotificationItemContainerState {
    isShown: boolean;
}
export declare class NotificationItemContainer extends Component<NotificationItemContainerProps, NotificationItemContainerState> {
    static defaultProps: Partial<NotificationItemContainerProps>;
    timer: NodeJS.Timeout | null;
    state: {
        isShown: boolean;
    };
    componentDidMount(): void;
    componentDidUpdate(prevProps: NotificationItemContainerProps): void;
    componentWillUnmount(): void;
    startTimer: () => void;
    stopTimer: () => void;
    close: () => void;
    handleMouseEnter: () => void;
    handleMouseLeave: () => void;
    render(): JSX.Element;
}
export default NotificationItemContainer;
