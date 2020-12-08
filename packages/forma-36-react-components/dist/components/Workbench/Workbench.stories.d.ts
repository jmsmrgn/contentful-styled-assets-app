/// <reference types="react" />
import Workbench, { WorkbenchProps } from './Workbench';
declare const _default: {
    title: string;
    component: typeof Workbench;
    parameters: {
        propTypes: any;
        notes: string;
    };
    argTypes: {
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
    (args: WorkbenchProps): JSX.Element;
    args: {
        ['header title']: string;
        ['header description']: string;
        ['workbench content']: string;
        ['left sidebar']: string;
        ['right sidebar']: string;
    };
};
export declare const withLeftSidebar: {
    (args: WorkbenchProps): JSX.Element;
    args: {
        ['header title']: string;
        ['header description']: string;
        ['workbench content']: string;
        ['left sidebar']: string;
        ['right sidebar']: string;
    };
};
export declare const withRightSidebar: {
    (args: WorkbenchProps): JSX.Element;
    args: {
        ['header title']: string;
        ['header description']: string;
        ['workbench content']: string;
        ['left sidebar']: string;
        ['right sidebar']: string;
    };
};
export declare const withLeftAndRightSidebar: {
    (args: WorkbenchProps): JSX.Element;
    args: {
        ['header title']: string;
        ['header description']: string;
        ['workbench content']: string;
        ['left sidebar']: string;
        ['right sidebar']: string;
    };
};
export declare const withBackButton: {
    (args: WorkbenchProps): JSX.Element;
    args: {
        ['header title']: string;
        ['header description']: string;
        ['workbench content']: string;
        ['left sidebar']: string;
        ['right sidebar']: string;
    };
};
