import React, { Component } from 'react';
import { BaseCardProps } from '../Card';
import { AssetType } from '../../Asset';
import { CardDragHandlePropTypes } from '../CardDragHandle';
export declare type AssetState = 'archived' | 'changed' | 'draft' | 'published';
export interface AssetCardProps extends BaseCardProps {
    /**
     * The source of the asset (will also render a thumbnail if the AssetCard's type is set to image)
     */
    src: string;
    /**
     * The title of the asset
     */
    title: string;
    /**
     * Loading state for the AssetCard - when true will display loading feedback to the user
     */
    isLoading?: boolean;
    /**
     * The DropdownList elements used to render an actions dropdown for the AssetCard
     */
    dropdownListElements?: React.ReactElement;
    /**
     * The publish status of the asset
     */
    status?: AssetState;
    /**
     * The type of asset being represented
     */
    type?: AssetType;
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
     * Renders a small variant of the card which accommodates a 150x150px image
     */
    size?: 'small' | 'default';
}
export declare class AssetCard extends Component<AssetCardProps> {
    static defaultProps: Partial<AssetCardProps>;
    renderStatus: (status: import("../EntryCard").EntryCardStatus) => JSX.Element;
    renderCardDragHandle(): {} | undefined;
    render(): JSX.Element;
}
export default AssetCard;
