import { Component } from 'react';
declare type SpinnerSize = 'default' | 'small' | 'large';
declare type SpinnerColor = 'default' | 'white';
export interface SpinnerProps {
    size?: SpinnerSize;
    customSize?: number;
    color?: SpinnerColor;
    className?: string;
    testId?: string;
}
export declare class Spinner extends Component<SpinnerProps> {
    static defaultProps: Partial<SpinnerProps>;
    render(): JSX.Element;
}
export default Spinner;
