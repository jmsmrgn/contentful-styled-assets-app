/// <reference types="react" />
import { SkeletonTextProps } from '../SkeletonText';
export interface SkeletonBodyTextProps extends SkeletonTextProps {
}
export declare const SkeletonBodyText: {
    ({ numberOfLines, ...otherProps }: SkeletonBodyTextProps): JSX.Element;
    defaultProps: Partial<SkeletonBodyTextProps>;
};
export default SkeletonBodyText;
