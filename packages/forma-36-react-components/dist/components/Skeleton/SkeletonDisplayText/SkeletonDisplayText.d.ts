import { Component } from 'react';
import { SkeletonTextProps } from '../SkeletonText';
export interface SkeletonDisplayTextProps extends SkeletonTextProps {
}
export declare class SkeletonDisplayText extends Component<SkeletonDisplayTextProps> {
    static defaultProps: Partial<SkeletonDisplayTextProps>;
    render(): JSX.Element;
}
export default SkeletonDisplayText;
