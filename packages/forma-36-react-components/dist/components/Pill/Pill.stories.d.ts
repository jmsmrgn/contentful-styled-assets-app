/// <reference types="react" />
import Pill, { PillProps } from './Pill';
declare const _default: {
    title: string;
    component: typeof Pill;
    parameters: {
        propTypes: any[];
        notes: string;
    };
    argTypes: {
        label: {
            control: {
                type: string;
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
        onClose: {
            control: {
                disable: boolean;
            };
        };
        onDrag: {
            control: {
                disable: boolean;
            };
        };
        dragHandleComponent: {
            control: {
                disable: boolean;
            };
        };
    };
};
export default _default;
export declare const basic: {
    (args: PillProps): JSX.Element;
    args: {
        label: string;
    };
};
export declare const onDragAndOnClose: {
    (args: PillProps): JSX.Element;
    args: {
        label: string;
        onClose: any;
        onDrag: any;
    };
};
export declare const CustomHandleComponent: {
    (args: PillProps): JSX.Element;
    args: {
        label: string;
        onClose: any;
        onDrag: any;
    };
};
