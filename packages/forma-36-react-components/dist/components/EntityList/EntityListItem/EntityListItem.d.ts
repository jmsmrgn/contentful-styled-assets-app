import React, { Component, MouseEventHandler } from 'react';
import { CardDragHandlePropTypes } from '../../Card/CardDragHandle';
export declare type EntityListItemStatus = 'archived' | 'changed' | 'draft' | 'published';
export interface EntityListItemProps {
    /**
     * The title of the entity
     */
    title: string;
    /**
     * The description of the entity
     */
    description?: string;
    /**
     * The content type of the entity
     */
    contentType?: string;
    /**
     * The publish status of the entry
     */
    status?: 'archived' | 'changed' | 'draft' | 'published';
    /**
     * A boolean used to render the Thumbnail or not
     */
    withThumbnail?: boolean;
    /**
     * The URL of the entity's preview thumbnail. Use 46px x 46px images for best results
     */
    thumbnailUrl?: string;
    /**
     * The alt text for the thumbnail
     */
    thumbnailAltText?: string;
    /**
     * The DropdownList elements used to render actions for the component
     */
    dropdownListElements?: React.ReactElement;
    /**
     * Renders a drag handle for the component for use in drag and drop contexts
     */
    withDragHandle?: boolean;
    /**
     * Applies styling for when the component is actively being dragged by the user
     */
    isDragActive?: boolean;
    /**
     * Prop to pass a custom CardDragHandle component to for use in drag and drop contexts
     */
    cardDragHandleComponent?: React.ReactNode;
    /**
     * Props to pass down to the default CardDragHandle component (does not work with cardDragHandleComponent prop)
     */
    cardDragHandleProps?: Partial<CardDragHandlePropTypes>;
    /**
     * An entity can either be an Entry, an Asset or a Release. This prop will apply styling based on if the entity is an asset, a release or an entry
     *
     * Note: 'entry' and 'asset' are @deprecated but supported in v1.x for backwards compatibility
     */
    entityType?: 'Entry' | 'Asset' | 'entry' | 'asset' | 'Release';
    /**
     * Loading state for the component - when true will display loading feedback to the user
     */
    isLoading?: boolean;
    /**
     * The action to be performed on click of the EntryCard
     */
    onClick?: MouseEventHandler;
    /**
     * The href for the component. Will render the card as an `a` element for native browser link handling
     */
    href?: string;
    /**
     * Class names to be appended to the className prop of the component
     */
    className?: string;
    /**
     * An ID used for testing purposes applied as a data attribute (data-test-id)
     */
    testId?: string;
    /**
     * A boolean used to disable the CardActions
     */
    isActionsDisabled?: boolean;
}
export declare class EntityListItem extends Component<EntityListItemProps> {
    static defaultProps: Partial<EntityListItemProps>;
    renderIcon(): JSX.Element;
    renderThumbnail(): JSX.Element;
    renderStatus: (status: import("../../Card/EntryCard").EntryCardStatus) => JSX.Element;
    renderLoadingCard(): JSX.Element;
    renderCardDragHandle(): {} | undefined;
    render(): JSX.Element;
}
export default EntityListItem;
