/// <reference types="react" />
declare const _default: {
    title: string;
    component: {
        ({ children, className, containerElement: ContainerElement, content, id, isVisible, maxWidth, onBlur, onFocus, onMouseLeave, onMouseOver, place, targetWrapperClassName, testId, ...otherProps }: import("./Tooltip").TooltipProps): JSX.Element;
        defaultProps: {
            containerElement: string;
            isVisible: boolean;
            maxWidth: number;
            testId: string;
            place: string;
        };
    };
    parameters: {
        propTypes: any;
        notes: string;
    };
    argTypes: {
        content: {
            control: string;
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
    (args: {
        content: string;
    }): JSX.Element;
    args: {
        content: string;
    };
    parameters: {
        docs: {
            source: {
                code: string;
            };
        };
    };
};
export declare const withHtml: {
    (args: {
        content: string;
    }): JSX.Element;
    args: {
        content: JSX.Element;
    };
    parameters: {
        docs: {
            source: {
                code: string;
            };
        };
    };
};
export declare const autoPlacement: {
    (args: {
        content: string;
    }): JSX.Element;
    args: {
        place: string;
        content: JSX.Element;
    };
    parameters: {
        docs: {
            source: {
                code: string;
            };
        };
    };
};
