import { Component } from 'react';
import ModalHeader, { ModalHeaderProps } from './ModalHeader';
import ModalContent, { ModalContentProps } from './ModalContent';
import ModalControls from './ModalControls/ModalControls';
export declare type ModalSizeType = 'small' | 'medium' | 'large' | 'fullWidth' | 'zen' | string | number;
export interface ModalProps {
    /**
     * When true, the dialog is shown.
     */
    isShown: boolean;
    /**
     * Function that will be called when the exit is complete.
     */
    onClose: Function;
    /**
     * Function that will be called when the enter is complete.
     */
    onAfterOpen?: Function;
    /**
     * Boolean indicating if clicking the overlay should close the overlay.
     */
    shouldCloseOnOverlayClick?: boolean;
    /**
     * Boolean indicating if pressing the esc key should close the overlay.
     */
    shouldCloseOnEscapePress?: boolean;
    /**
     * Boolean indicating if modal is centered
     */
    position?: 'center' | 'top';
    /**
        Top offset if position is 'top'
      */
    topOffset?: number | string;
    /**
        Modal title that is used in header
      */
    title?: string;
    /**
        Size of the modal window
      */
    size?: ModalSizeType;
    /**
     * Are modals higher than viewport allowed
     */
    allowHeightOverflow?: boolean;
    /**
     * Optional props to override ModalHeader behaviour
     */
    modalHeaderProps?: Partial<ModalHeaderProps>;
    /**
     * Optional props to override ModalContent behaviour
     */
    modalContentProps?: Partial<ModalContentProps>;
    className?: string;
    testId?: string;
    children: any;
}
export declare class Modal extends Component<ModalProps> {
    static Header: typeof ModalHeader;
    static Content: typeof ModalContent;
    static Controls: typeof ModalControls;
    static defaultProps: Partial<ModalProps>;
    renderDefault(): JSX.Element;
    render(): JSX.Element;
}
export default Modal;
