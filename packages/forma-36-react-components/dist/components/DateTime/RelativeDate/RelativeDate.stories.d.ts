import React from 'react';
import { RelativeDateProps } from './RelativeDate';
declare const _default: {
    title: string;
    component: React.FC<RelativeDateProps>;
    parameters: {
        propTypes: any;
        notes: string;
    };
    argTypes: {
        date: {
            control: {
                type: string;
            };
        };
        baseDate: {
            control: {
                type: string;
                disabled: boolean;
            };
        };
        className: {
            control: {
                type: string;
            };
        };
        testId: {
            control: {
                type: string;
            };
        };
    };
};
export default _default;
export declare const basic: any;
export declare const withBaseDate: any;
