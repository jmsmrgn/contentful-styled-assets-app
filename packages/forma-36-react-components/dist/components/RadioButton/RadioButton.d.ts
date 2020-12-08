import { Component } from 'react';
import { ControlledInputPropTypes } from '../ControlledInput';
export interface RadioButtonProps extends ControlledInputPropTypes {
}
export declare class RadioButton extends Component<RadioButtonProps> {
    static defaultProps: Partial<RadioButtonProps>;
    render(): JSX.Element;
}
export default RadioButton;
