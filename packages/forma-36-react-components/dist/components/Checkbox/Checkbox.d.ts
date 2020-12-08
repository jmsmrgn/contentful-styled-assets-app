import { Component } from 'react';
import { ControlledInputPropTypes } from '../ControlledInput';
export interface CheckboxProps extends ControlledInputPropTypes {
}
export declare class Checkbox extends Component<CheckboxProps> {
    static defaultProps: Partial<CheckboxProps>;
    render(): JSX.Element;
}
export default Checkbox;
