interface EditorConfig {
    features: string[];
    customFeatures?: CustomFeature[];
}
interface CustomFeature {
    label: string;
    command: string;
    icon: string;
    onClick: (editor: TextIgniter) => void;
}
interface NodeJson {
    type: string;
    attributes: {
        [key: string]: string;
    };
    children: (NodeJson | string)[];
}
declare class TextIgniter {
    private editor;
    private config;
    private container;
    private imageHandler;
    private textHeadingHandler;
    private insertTableHandler;
    private insertLayoutHandler;
    private hyperlinkHandler;
    constructor(editorId: string, config: EditorConfig);
    private createContainer;
    private init;
    private createToolbar;
    private addSelectionListener;
    private addKeyboardShortcuts;
    format(command: string): void;
    private updateSubSuperButtonState;
    private updateListButtonState;
    getHtml(): string;
    getJson(): NodeJson;
}

export { type CustomFeature, type EditorConfig, type NodeJson, TextIgniter };
