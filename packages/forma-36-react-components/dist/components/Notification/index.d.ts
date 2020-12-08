import { ShowAction, CloseAction, CloseAllAction, SetPositionAction, SetDurationAction, Notification as NotificationType } from './NotificationsManager';
import { NotificationCtaProps } from './NotificationItem';
export interface NotificationsAPI {
    success: ShowAction<Notification>;
    error: ShowAction<Notification>;
    show: ShowAction<Notification>;
    close: CloseAction<void>;
    closeAll: CloseAllAction<void>;
    setPosition: SetPositionAction<void>;
    setDuration: SetDurationAction<void>;
}
declare type ExternalShowAction<T> = (text: string, settings?: {
    duration?: number;
    canClose?: boolean;
    id?: string;
    title?: string;
    cta?: Partial<NotificationCtaProps>;
}) => T;
export declare const Notification: {
    success: ExternalShowAction<Promise<NotificationType>>;
    error: ExternalShowAction<Promise<NotificationType>>;
    warning: ExternalShowAction<Promise<NotificationType>>;
    close: CloseAction<Promise<void>>;
    closeAll: CloseAllAction<Promise<void>>;
    setPosition: SetPositionAction<Promise<void>>;
    setDuration: SetDurationAction<Promise<void>>;
};
export default Notification;
