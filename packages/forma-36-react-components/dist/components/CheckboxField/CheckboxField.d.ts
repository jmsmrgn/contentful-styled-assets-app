import { Component } from 'react';
import { ControlledInputFieldPropTypes } from '../ControlledInputField';
export interface CheckboxFieldProps extends ControlledInputFieldPropTypes {
}
export declare class CheckboxField extends Component<CheckboxFieldProps> {
    static defaultProps: Partial<CheckboxFieldProps>;
    render(): JSX.Element;
}
export default CheckboxField;
