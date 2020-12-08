import React, { Component } from 'react';
export interface WorkbenchHeaderProps {
    title?: React.ReactElement | string;
    description?: React.ReactElement | string;
    icon?: React.ReactElement;
    actions?: React.ReactElement;
    onBack?: Function;
    className?: string;
    testId?: string;
}
export declare function WorkbenchHeader(props: WorkbenchHeaderProps): JSX.Element;
export declare namespace WorkbenchHeader {
    var defaultProps: {
        testId: string;
    };
    var displayName: string;
}
interface WorkbenchSidebarProps {
    children: React.ReactNode;
    className?: string;
    position?: 'left' | 'right';
    testId?: string;
}
export declare function WorkbenchSidebar(props: WorkbenchSidebarProps): JSX.Element;
export declare namespace WorkbenchSidebar {
    var defaultProps: {
        testId: string;
    };
}
interface WorkbenchContentProps {
    children: React.ReactNode;
    type?: 'default' | 'text' | 'full';
    className?: string;
    testId?: string;
}
export declare function WorkbenchContent(props: WorkbenchContentProps): JSX.Element;
export declare namespace WorkbenchContent {
    var defaultProps: {
        type: string;
        testId: string;
    };
}
export interface WorkbenchProps {
    /**
     * Class names to be appended to the className prop of the component
     */
    className?: string;
    /**
     * Child nodes to be rendered in the component
     */
    children?: React.ReactNode;
    /**
     * An ID used for testing purposes applied as a data attribute (data-test-id)
     */
    testId?: string;
}
export declare class Workbench extends Component<WorkbenchProps> {
    static defaultProps: Partial<WorkbenchProps>;
    static Header: typeof WorkbenchHeader;
    static Content: typeof WorkbenchContent;
    static Sidebar: typeof WorkbenchSidebar;
    render(): JSX.Element;
}
export default Workbench;
