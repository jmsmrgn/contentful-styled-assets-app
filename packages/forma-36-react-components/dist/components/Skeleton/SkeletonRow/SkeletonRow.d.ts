/// <reference types="react" />
export interface SkeletonRowProps {
    /** Defines the number of rows to be rendered */
    rowCount?: number;
    /** Defines the number of columns to be rendered */
    columnCount?: number;
}
export declare const SkeletonRow: {
    ({ rowCount, columnCount }: SkeletonRowProps): JSX.Element;
    defaultProps: {
        rowCount: number;
        columnCount: number;
    };
};
export default SkeletonRow;
