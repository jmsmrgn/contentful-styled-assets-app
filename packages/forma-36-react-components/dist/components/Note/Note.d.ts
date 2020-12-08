import React, { CSSProperties, Component } from 'react';
export interface NoteProps {
    noteType?: 'primary' | 'positive' | 'negative' | 'warning';
    className?: string;
    title?: string;
    style?: CSSProperties;
    testId?: string;
    children: React.ReactNode;
    hasCloseButton?: boolean;
    onClose?: Function;
}
export declare class Note extends Component<NoteProps> {
    static defaultProps: Partial<NoteProps>;
    render(): JSX.Element;
}
export default Note;
