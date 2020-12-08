import React, { Component } from 'react';
export interface EditorToolbarProps {
    className?: string;
    children: React.ReactNode;
    testId?: string;
    style?: React.CSSProperties;
}
export declare class EditorToolbar extends Component<EditorToolbarProps> {
    static defaultProps: Partial<EditorToolbarProps>;
    render(): JSX.Element;
}
export default EditorToolbar;
