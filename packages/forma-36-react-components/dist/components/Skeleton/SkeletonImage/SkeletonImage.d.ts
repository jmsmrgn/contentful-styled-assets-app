import { Component } from 'react';
declare type stringOrNumber = string | number;
export interface SkeletonImageProps {
    width?: stringOrNumber;
    height?: stringOrNumber;
    radiusX?: stringOrNumber;
    radiusY?: stringOrNumber;
    offsetLeft?: stringOrNumber;
    offsetTop?: stringOrNumber;
    testId?: string;
}
export declare class SkeletonImage extends Component<SkeletonImageProps> {
    static defaultProps: Partial<SkeletonImageProps>;
    render(): JSX.Element;
}
export default SkeletonImage;
