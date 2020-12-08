import React, { Component, MouseEventHandler } from 'react';
import { BaseCardProps } from '../Card';
import { CardDragHandlePropTypes } from '../CardDragHandle';
export declare type EntryCardStatus = 'archived' | 'changed' | 'draft' | 'published';
export declare type EntryCardSize = 'default' | 'small' | 'auto';
export interface EntryCardPropTypes extends BaseCardProps {
    /**
     * The title of the entry
     */
    title?: string;
    /**
     * The description of the entry
     */
    description?: string;
    /**
     * The content type of the entry
     */
    contentType?: React.ReactNode;
    /**
     * The publish status of the entry
     */
    status?: EntryCardStatus;
    /**
     * An icon for the status of the entry
     */
    statusIcon?: React.ReactNode;
    /**
     * The thumbnail of the entry
     */
    thumbnailElement?: React.ReactNode;
    /**
     * Loading state for the EntryCard - when true will display loading feedback to the user
     */
    loading?: boolean;
    /**
     * The action to be performed on click of the EntryCard
     */
    onClick?: MouseEventHandler;
    /**
     * The DropdownList elements used to render an actions dropdown for the EntryCard
     */
    dropdownListElements?: React.ReactElement;
    /**
     * Prop to pass a custom CardDragHandle component to for use in drag and drop contexts
     */
    cardDragHandleComponent?: React.ReactNode;
    /**
     * Renders a default drag handle for the component for use in drag and drop contexts
     */
    withDragHandle?: boolean;
    /**
     * Props to pass down to the default CardDragHandle component (does not work with cardDragHandleComponent prop)
     */
    cardDragHandleProps?: Partial<CardDragHandlePropTypes>;
    /**
     * Applies styling for when the component is actively being dragged by the user
     */
    isDragActive?: boolean;
    /**
     * Changes the height of the component. When small will also ensure thumbnail and description aren't rendered
     */
    size: EntryCardSize;
}
export declare class EntryCard extends Component<EntryCardPropTypes> {
    static defaultProps: Partial<EntryCardPropTypes>;
    state: {
        isDropdownOpen: boolean;
    };
    renderTitle: (size: EntryCardSize, title?: string | undefined) => JSX.Element | undefined;
    renderDescription: (size: EntryCardSize, description?: string | undefined) => JSX.Element | undefined;
    renderThumbnail: (size: EntryCardSize, thumbnailElement?: React.ReactNode) => JSX.Element | undefined;
    renderStatus: (status: EntryCardStatus) => JSX.Element;
    renderCardDragHandle(): {} | undefined;
    render(): JSX.Element;
}
export default EntryCard;
