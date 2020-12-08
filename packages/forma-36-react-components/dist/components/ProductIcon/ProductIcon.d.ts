import { CSSProperties } from 'react';
import { productIconName } from './constants';
export declare type ProductIconType = keyof typeof productIconName;
export declare type ProductIconColorType = 'primary' | 'positive' | 'negative' | 'warning' | 'secondary' | 'muted' | 'white';
export declare type ProductIconSize = 'small' | 'medium' | 'large' | 'xlarge';
export declare type ProductIconTagType = 'div' | 'span';
export interface ProductIconProps {
    size?: ProductIconSize;
    color?: ProductIconColorType;
    style?: CSSProperties;
    icon: ProductIconType;
    className?: string;
    testId?: string;
    tag: ProductIconTagType;
}
export declare const ProductIcon: {
    ({ className, icon, size, color, testId, tag, ...otherProps }: ProductIconProps): JSX.Element;
    defaultProps: {
        testId: string;
        size: string;
        color: string;
        tag: string;
    };
};
export default ProductIcon;
