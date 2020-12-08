import { FunctionComponent } from 'react';
export interface SwitchProps {
    onToggle?: (isChecked: boolean) => void;
    isChecked?: boolean;
    isDisabled?: boolean;
    labelText: string;
    className?: string;
    id: string;
}
export declare const Switch: FunctionComponent<SwitchProps>;
export default Switch;
