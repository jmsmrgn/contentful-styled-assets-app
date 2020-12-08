import { Component } from 'react';
import { IllustrationProps } from '../../Illustration';
import { AssetType } from '../Asset';
export interface AssetIconProps extends Omit<IllustrationProps, 'illustration'> {
    type?: AssetType;
}
/**
 * Renders only the Illustration that would represent this asset's type
 */
export declare class AssetIcon extends Component<AssetIconProps> {
    static defaultProps: Partial<AssetIconProps>;
    render(): JSX.Element;
}
export default AssetIcon;
