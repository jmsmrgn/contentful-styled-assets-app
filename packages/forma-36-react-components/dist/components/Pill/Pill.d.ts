import React, { Component } from 'react';
export interface PillProps {
    label: string;
    onClose?: () => void;
    onDrag?: () => void;
    className?: string;
    testId?: string;
    style?: React.CSSProperties;
    dragHandleComponent?: React.ReactNode;
}
export declare class Pill extends Component<PillProps> {
    static defaultProps: Partial<PillProps>;
    render(): JSX.Element;
}
export default Pill;
