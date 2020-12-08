import { PureComponent } from 'react';
import { NotificationIntent, NotificationCtaProps } from './NotificationItem';
export declare type Position = 'top' | 'bottom';
export interface Notification {
    id: string | number;
    text: string;
    close: Function;
    duration?: number;
    canClose: boolean;
    isShown: boolean;
    intent: NotificationIntent;
    title?: string;
    cta?: Partial<NotificationCtaProps>;
}
export declare type ShowAction<T> = (text: string, setting?: {
    intent: NotificationIntent;
    id?: string;
    duration?: number;
    canClose?: boolean;
    title?: string;
    cta?: Partial<NotificationCtaProps>;
}) => T;
export declare type CloseAction<T> = (id: string | number) => T;
export declare type CloseAllAction<T> = () => T;
export declare type SetDurationAction<T> = (duration: number) => T;
export declare type SetPositionAction<T> = (position: Position, params?: {
    offset: number;
}) => T;
export interface NotificationsManagerProps {
    register: (name: string, callback: Function) => void;
}
export interface NotificationsManagerState {
    position: Position;
    positionOffset: number;
    duration: number;
    items: Notification[];
}
export declare class NotificationsManager extends PureComponent<NotificationsManagerProps, NotificationsManagerState> {
    constructor(props: NotificationsManagerProps);
    setPosition: SetPositionAction<void>;
    setDuration: SetDurationAction<void>;
    close: CloseAction<void>;
    closeAndDelete: (id: string | number) => void;
    closeAll: CloseAllAction<void>;
    show: ShowAction<Notification>;
    render(): JSX.Element;
}
export default NotificationsManager;
