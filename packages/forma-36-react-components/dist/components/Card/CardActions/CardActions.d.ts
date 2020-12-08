import React, { Component } from 'react';
import DropdownList from '../../Dropdown/DropdownList';
import { IconButtonProps } from '../../IconButton';
export interface CardActionsPropTypes {
    /**
     * Class names to be appended to the className prop of the component
     */
    className?: string;
    /**
     * Props to pass down to the IconButton component
     */
    iconButtonProps?: Partial<IconButtonProps>;
    /**
     * A boolean used to disable the actions
     */
    isDisabled?: boolean;
    /**
     * The DropdownList elements used to render an actions dropdown for the component
     */
    children: React.ReactElement<typeof DropdownList> | React.ReactElement<typeof DropdownList>[];
    /**
     * An ID used for testing purposes applied as a data attribute (data-test-id)
     */
    testId?: string;
}
export interface CardActionsState {
    isDropdownOpen: boolean;
}
export declare class CardActions extends Component<CardActionsPropTypes, CardActionsState> {
    static defaultProps: Partial<CardActionsPropTypes>;
    state: {
        isDropdownOpen: boolean;
    };
    handleClick: (event: React.MouseEvent<Element, MouseEvent>) => void;
    render(): JSX.Element;
}
export default CardActions;
