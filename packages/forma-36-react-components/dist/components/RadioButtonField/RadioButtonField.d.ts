import { Component } from 'react';
import { ControlledInputFieldPropTypes } from '../ControlledInputField';
export interface RadioButtonFieldProps extends ControlledInputFieldPropTypes {
}
export declare class RadioButtonField extends Component<RadioButtonFieldProps> {
    static defaultProps: Partial<RadioButtonFieldProps>;
    render(): JSX.Element;
}
export default RadioButtonField;
