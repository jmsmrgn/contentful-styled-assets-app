import { Component } from 'react';
import { AssetState } from '../Card/AssetCard/AssetCard';
export declare const types: {
    archive: string;
    audio: string;
    code: string;
    image: string;
    markup: string;
    pdf: string;
    plaintext: string;
    presentation: string;
    richtext: string;
    spreadsheet: string;
    video: string;
};
export declare function isAssetType(type: string): type is AssetType;
export declare type AssetType = keyof typeof types;
export interface AssetProps {
    src: string;
    title: string;
    type?: AssetType;
    className?: string;
    status?: AssetState;
    testId?: string;
}
export declare class Asset extends Component<AssetProps> {
    static defaultProps: Partial<AssetProps>;
    renderImage: (src: string, title: string) => JSX.Element;
    renderAsset: (type: "audio" | "code" | "video" | "image" | "plaintext" | "archive" | "markup" | "pdf" | "presentation" | "richtext" | "spreadsheet", title: string) => JSX.Element;
    render(): JSX.Element;
}
export default Asset;
