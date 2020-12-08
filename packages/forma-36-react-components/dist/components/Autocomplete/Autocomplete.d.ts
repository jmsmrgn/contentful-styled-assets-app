import React from 'react';
import { DropdownProps } from '../Dropdown';
interface RenderToggleElementProps {
    query?: string;
    onChange: (value: string) => void;
    onFocus: () => void;
    onKeyDown: (event: React.KeyboardEvent) => void;
    onToggle: () => void;
    disabled?: boolean;
    placeholder?: string;
    width?: 'small' | 'medium' | 'large' | 'full';
    inputRef: React.RefObject<HTMLInputElement>;
    name?: string;
}
export interface AutocompleteProps<T extends {}> {
    children: (items: T[]) => React.ReactNode[];
    items: T[];
    onChange: (item: T) => void;
    onQueryChange: (query: string) => void;
    disabled?: boolean;
    placeholder?: string;
    name?: string;
    width?: 'small' | 'medium' | 'large' | 'full';
    className?: string;
    maxHeight?: number;
    isLoading?: boolean;
    emptyListMessage?: string;
    noMatchesMessage?: string;
    willClearQueryOnClose?: boolean;
    dropdownProps?: DropdownProps;
    renderToggleElement?: (props: RenderToggleElementProps) => React.ReactElement;
}
export declare const Autocomplete: <T extends {}>({ children, items, disabled, onChange, onQueryChange, placeholder, name, width, className, maxHeight, isLoading, emptyListMessage, noMatchesMessage, willClearQueryOnClose, dropdownProps, renderToggleElement, }: AutocompleteProps<T>) => JSX.Element;
export default Autocomplete;
