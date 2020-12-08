import React, { Component } from 'react';
export interface InViewportProps {
    offset?: number;
    onOverflowTop?: Function;
    onOverflowRight?: Function;
    onOverflowBottom?: Function;
    onOverflowLeft?: Function;
    className?: string;
    children?: React.ReactNode;
    testId?: string;
}
export declare class InViewport extends Component<InViewportProps> {
    static defaultProps: Partial<InViewportProps>;
    tGetDomPosition: EventListenerOrEventListenerObject | null;
    nodeRef: HTMLDivElement | null;
    lastOverflowAt: string | null;
    tOnOverflowTop: ((...args: any[]) => any) | undefined;
    tOnOverflowBottom: ((...args: any[]) => any) | undefined;
    tOnOverflowRight: ((...args: any[]) => any) | undefined;
    tOnOverflowLeft: ((...args: any[]) => any) | undefined;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    getDomPosition: () => void;
    bindEventListeners: () => void;
    handleOverflow: ({ top, left, bottom, right }: DOMRect | ClientRect, windowWidth: number, windowHeight: number) => void;
    render(): JSX.Element;
}
export default InViewport;
