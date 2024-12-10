interface EditorConfig {
    features: string[];
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
    private deactivateAlignmentButtons;
    private addSelectionListener;
    private addKeyboardShortcuts;
    format(command: string): void;
    private updateButtonState;
    private updateSubSuperButtonState;
    private updateListButtonState;
    getHtml(): string;
    getJson(): NodeJson;
}

export { type EditorConfig, type NodeJson, TextIgniter };
