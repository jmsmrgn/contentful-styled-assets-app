/// <reference types="react" />
interface ModalLauncherComponentRendererProps<T = any> {
    isShown: boolean;
    onClose: (result?: T) => void;
}
interface ModalLauncherOpenOptions {
    modalId?: string;
    delay?: number;
}
declare function open<T = any>(componentRenderer: (props: ModalLauncherComponentRendererProps<T>) => JSX.Element, options?: ModalLauncherOpenOptions): Promise<T>;
export declare const ModalLauncher: {
    open: typeof open;
};
export default ModalLauncher;
