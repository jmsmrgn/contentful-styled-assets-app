import React, { Component } from 'react';
import { illustrationName } from './constants';
export declare type IllustrationType = keyof typeof illustrationName;
export declare function isIllustrationType(name: string): name is IllustrationType;
export interface IllustrationProps {
    illustration: IllustrationType;
    className?: string;
    testId?: string;
    style?: React.CSSProperties;
}
export declare class Illustration extends Component<IllustrationProps> {
    static defaultProps: Partial<IllustrationProps>;
    render(): JSX.Element;
}
export default Illustration;
