import React, { Component } from 'react';
export interface SkeletonContainerProps {
    width?: number | string;
    height?: number | string;
    preserveAspectRatio?: string;
    clipId?: string;
    gradientId?: string;
    animateId?: string;
    backgroundColor?: string;
    backgroundOpacity?: number;
    animate?: boolean;
    speed?: number | string;
    foregroundColor?: string;
    foregroundOpacity?: number;
    svgWidth?: string | number;
    svgHeight?: string | number;
    ariaLabel?: string;
    className?: string;
    testId?: string;
    children: React.ReactNode;
}
export declare class SkeletonContainer extends Component<SkeletonContainerProps> {
    static defaultProps: Partial<SkeletonContainerProps>;
    render(): JSX.Element;
}
export default SkeletonContainer;
