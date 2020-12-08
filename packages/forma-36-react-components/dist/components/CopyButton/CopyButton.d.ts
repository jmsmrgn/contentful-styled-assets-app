import React, { Component } from 'react';
import { TooltipPlace } from '../Tooltip';
export interface CopyButtonProps {
    copyValue?: string;
    onCopy?: (value: string) => void;
    className?: string;
    testId?: string;
    tooltipPlace?: TooltipPlace;
    tooltipText?: React.ReactNode;
    tooltipCopiedText?: React.ReactNode;
}
export interface CopyButtonState {
    copied: boolean;
}
export declare class CopyButton extends Component<CopyButtonProps, CopyButtonState> {
    static defaultProps: Partial<CopyButtonProps>;
    state: {
        copied: boolean;
    };
    copyButton: HTMLButtonElement | null;
    tooltipAnchor: HTMLDivElement | null;
    onCopy: (e: string) => void;
    render(): JSX.Element;
}
export default CopyButton;
