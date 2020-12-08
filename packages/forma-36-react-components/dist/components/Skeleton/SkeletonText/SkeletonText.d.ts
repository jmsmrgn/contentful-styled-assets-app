import { Component } from 'react';
declare type stringOrNumber = string | number;
export interface SkeletonTextProps {
    numberOfLines?: number;
    offsetTop?: stringOrNumber;
    offsetLeft?: stringOrNumber;
    lineHeight?: stringOrNumber;
    marginBottom?: stringOrNumber;
    width?: stringOrNumber;
}
export declare class SkeletonText extends Component<SkeletonTextProps> {
    static defaultProps: Partial<SkeletonTextProps>;
    getLineWidth: (lastLine: boolean) => string | number;
    render(): JSX.Element;
}
export default SkeletonText;
