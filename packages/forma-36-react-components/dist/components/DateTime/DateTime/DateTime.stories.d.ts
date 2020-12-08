import React from 'react';
import { DateTimeProps } from './DateTime';
declare const _default: {
    title: string;
    component: React.FC<DateTimeProps>;
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
        format: {
            control: {
                type: string;
                options: string[];
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
export declare const withOtherFormats: any;
