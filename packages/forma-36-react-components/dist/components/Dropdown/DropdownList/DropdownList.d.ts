import React from 'react';
import * as CSS from 'csstype';
export interface DropdownListProps {
    children: React.ReactNode;
    listRef?: React.RefObject<HTMLUListElement>;
    className?: string;
    testId?: string;
    border?: 'top' | 'bottom';
    maxHeight?: number | CSS.MaxHeightProperty<string>;
    styles?: object;
}
export declare const DropdownList: {
    ({ className, border, maxHeight, testId, children, listRef, styles, ...otherProps }: DropdownListProps): JSX.Element;
    defaultProps: {
        testId: string;
    };
};
export default DropdownList;
