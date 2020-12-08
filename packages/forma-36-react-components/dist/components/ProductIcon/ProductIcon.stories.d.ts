/// <reference types="react" />
import { ProductIconProps } from './ProductIcon';
declare const _default: {
    title: string;
    component: {
        ({ className, icon, size, color, testId, tag, ...otherProps }: ProductIconProps): JSX.Element;
        defaultProps: {
            testId: string;
            size: string;
            color: string;
            tag: string;
        };
    };
    parameters: {
        propTypes: any[];
        notes: string;
    };
    argTypes: {
        icon: {
            control: {
                type: string;
                options: {
                    Apis: string;
                    Apps: string;
                    Billing: string;
                    ContentModel: string;
                    Content: string;
                    Home: string;
                    Media: string;
                    Oauth: string;
                    OrgInfo: string;
                    Organizations: string;
                    Purchase: string;
                    Settings: string;
                    Spaces: string;
                    Sso: string;
                    Subscription: string;
                    Teams: string;
                    Token: string;
                    Usage: string;
                    Users: string;
                    UserProfile: string;
                };
            };
        };
        size: {
            control: {
                type: string;
                options: string[];
            };
        };
        color: {
            control: {
                type: string;
                options: string[];
            };
        };
        tag: {
            control: {
                type: string;
                options: string[];
            };
        };
    };
};
export default _default;
export declare const basic: {
    (args: ProductIconProps): JSX.Element;
    args: {
        icon: string;
        size: string;
        color: string;
        tag: string;
    };
};
