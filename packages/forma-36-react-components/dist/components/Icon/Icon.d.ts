import { Component, CSSProperties } from 'react';
import { iconName } from './constants';
export declare type IconType = keyof typeof iconName;
export declare type IconColorType = 'primary' | 'positive' | 'negative' | 'warning' | 'secondary' | 'muted' | 'white';
export declare type IconSize = 'tiny' | 'small' | 'medium' | 'large';
export interface IconProps {
    size?: IconSize;
    color?: IconColorType;
    style?: CSSProperties;
    icon: IconType;
    className?: string;
    testId?: string;
}
export declare class Icon extends Component<IconProps> {
    static defaultProps: Partial<IconProps>;
    render(): JSX.Element;
}
export default Icon;
