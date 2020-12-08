import React from 'react';
import { AccordionProps } from './Accordion';
declare const _default: {
    title: string;
    component: {
        ({ align, children, className, testId, ...otherProps }: AccordionProps): JSX.Element;
        defaultProps: {
            align: string;
            testId: string;
        };
    };
    subcomponents: {
        AccordionItem: React.FC<import("./AccordionItem/AccordionItem").AccordionItemProps>;
    };
    parameters: {
        propTypes: any[];
        notes: string;
    };
    argTypes: {
        align: {
            control: {
                type: string;
                options: string[];
            };
        };
        children: {
            control: {
                disable: boolean;
            };
        };
        className: {
            control: {
                disable: boolean;
            };
        };
        testId: {
            control: {
                disable: boolean;
            };
        };
    };
};
export default _default;
export declare const basic: {
    ({ align, ...args }: AccordionProps): JSX.Element;
    args: {
        align: string;
        ['AccordionItem Title #1']: string;
        ['AccordionItem Content #1']: string;
        ['AccordionItem Title #2']: string;
        ['AccordionItem Content #2']: string;
        ['AccordionItem Title #3']: string;
        ['AccordionItem Content #3']: string;
    };
};
