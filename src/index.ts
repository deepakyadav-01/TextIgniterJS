import {icons} from './assets/icons'
import { ImageHandler } from './insertImage';
import { TextHeadingHandler } from './textHeading';
import { InsertTableHandler } from './insertTable';
import { InsertLayoutHandler } from './insertLayout';
import { HyperlinkHandler } from './hyperLink';
import "./styles/text-igniter.css"

export interface EditorConfig {
  features: string[];
  customFeatures?: CustomFeature[];
}

export interface CustomFeature {
  label: string;
  command: string;
  icon: string;
  onClick: (editor: TextIgniter) => void;
}

export interface NodeJson {
  type: string;
  attributes: { [key: string]: string };
  children: (NodeJson | string)[];
}

export class TextIgniter {
  private editor: HTMLDivElement;
  private config: EditorConfig;
  private container!: HTMLDivElement;
  private imageHandler!: ImageHandler;
  private textHeadingHandler: TextHeadingHandler;
  private insertTableHandler: InsertTableHandler;
  private insertLayoutHandler: InsertLayoutHandler;
  private hyperlinkHandler: HyperlinkHandler;

  constructor(editorId: string, config: EditorConfig) {
    const editor = document.getElementById(editorId);
    if (!editor || !(editor instanceof HTMLDivElement)) {
      throw new Error("Editor element not found or incorrect element type.");
    }

    this.editor = editor;
    this.config = config;
    this.imageHandler = new ImageHandler(this.editor);
    this.textHeadingHandler = new TextHeadingHandler(this.editor);
    this.insertTableHandler = new InsertTableHandler(this.editor);
    this.insertLayoutHandler = new InsertLayoutHandler(this.editor);
    this.hyperlinkHandler = new HyperlinkHandler(this.editor);

    this.createContainer();
    this.init();
    this.createToolbar();
    this.addKeyboardShortcuts();
  }

  private createContainer() {
    this.container = document.createElement("div");
    this.container.classList.add("text-igniter");
    this.editor.parentNode!.insertBefore(this.container, this.editor);
    this.container.appendChild(this.editor);
  }

  private init() {
    this.editor.contentEditable = "true";
    this.editor.classList.add("editor");
    this.addSelectionListener();
    this.editor.focus();
  }

  private createToolbar() {
    const toolbar = document.createElement("div");
    toolbar.classList.add("toolbar");

    const featureIcons: { [key: string]: string } = {
      bold: icons.bold,
      italic: icons.italic,
      underline: icons.underline,
      subscript: icons.subscript,
      superscript: icons.superscript,
      left_align: icons.left_align,
      center_align: icons.center_align,
      right_align: icons.right_align,
      justify: icons.justify,
      bullet_list: icons.bullet_list,
      numbered_list: icons.numbered_list,
      insert_table: icons.insert_table,
      insert_layout: icons.insert_layout,
      heading: icons.heading,
      hyperlink: icons.hyperlink,
      image: icons.image,
    };

    this.config.features.forEach((feature) => {
      const button = document.createElement("button");
      button.innerHTML = featureIcons[feature] || feature;
      button.setAttribute("data-command", feature);

      switch (feature) {
        case "heading":
          button.onclick = () => this.textHeadingHandler.openHeadingModal();
          break;
        case "insert_table":
          button.onclick = () => this.insertTableHandler.openTableModal();
          break;
        case "insert_layout":
          button.onclick = () => this.insertLayoutHandler.openLayoutModal();
          break;
        case "hyperlink":
          button.onclick = () => this.hyperlinkHandler.openHyperlinkModal();
          break;
        case "image":
          button.onclick = () => this.imageHandler.insertImage();
          break;
        default:
          button.onclick = () => this.format(feature);
      }

      toolbar.appendChild(button);
    });

    if (this.config.customFeatures) {
      this.config.customFeatures.forEach((customFeature) => {
        const customButton = document.createElement("button");
        customButton.innerHTML = customFeature.icon;
        customButton.title = customFeature.label;
        customButton.onclick = () => customFeature.onClick(this);
        toolbar.appendChild(customButton);
      });
    }

    this.container.insertBefore(toolbar, this.editor);
  }

  private addSelectionListener() {
    document.addEventListener("selectionchange", () => {
      this.updateSubSuperButtonState();
      this.updateListButtonState();
    });
  }

  private addKeyboardShortcuts() {
    document.addEventListener("keydown", (e) => {
      if (e.ctrlKey && e.key === "b") {
        e.preventDefault();
        this.format("bold");
      } else if (e.ctrlKey && e.key === "i") {
        e.preventDefault();
        this.format("italic");
      } else if (e.ctrlKey && e.key === "u") {
        e.preventDefault();
        this.format("underline");
      }
    });
  }

  public format(command: string) {
    try {
      const commands: { [key: string]: string } = {
        bold: "bold",
        italic: "italic",
        underline: "underline",
        subscript: "subscript",
        superscript: "superscript",
        left_align: "justifyLeft",
        center_align: "justifyCenter",
        right_align: "justifyRight",
        justify: "justifyFull",
        bullet_list: "insertUnorderedList",
        numbered_list: "insertOrderedList",
      };

      const execCommand = commands[command];
      if (execCommand) {
        if (document.queryCommandSupported(execCommand)) {
          document.execCommand(execCommand, false, "");
        }
      } else {
        console.warn(`Command '${command}' not recognized.`);
      }
    } catch (error) {
      console.error(`Error executing command '${command}':`, error);
    }
  }

  private updateSubSuperButtonState() {
    const subscriptButton = this.container.querySelector(
      `button[data-command='subscript']`
    );
    const superscriptButton = this.container.querySelector(
      `button[data-command='superscript']`
    );

    if (subscriptButton) {
      if (document.queryCommandState("subscript")) {
        subscriptButton.classList.add("active");
      } else {
        subscriptButton.classList.remove("active");
      }
    }

    if (superscriptButton) {
      if (document.queryCommandState("superscript")) {
        superscriptButton.classList.add("active");
      } else {
        superscriptButton.classList.remove("active");
      }
    }
  }

  private updateListButtonState() {
    const bulletListButton = this.container.querySelector(
      `button[data-command='bullet_list']`
    );
    const numberedListButton = this.container.querySelector(
      `button[data-command='numbered_list']`
    );

    if (bulletListButton) {
      if (document.queryCommandState("insertUnorderedList")) {
        bulletListButton.classList.add("active");
      } else {
        bulletListButton.classList.remove("active");
      }
    }

    if (numberedListButton) {
      if (document.queryCommandState("insertOrderedList")) {
        numberedListButton.classList.add("active");
      } else {
        numberedListButton.classList.remove("active");
      }
    }
  }

  public getHtml(): string {
    return this.editor.innerHTML;
  }

  public getJson(): NodeJson {
    const parseNode = (node: Node): NodeJson | string => {
      if (node.nodeType === Node.TEXT_NODE) {
        return node.textContent || "";
      }

      const result: NodeJson = {
        type: node.nodeName.toLowerCase(),
        attributes: {},
        children: [],
      };

      if (node instanceof Element) {
        Array.from(node.attributes).forEach((attr) => {
          result.attributes[attr.name] = attr.value;
        });
      }

      node.childNodes.forEach((child) => {
        result.children.push(parseNode(child));
      });

      return result;
    };

    return {
      type: "root",
      attributes: {},
      children: [parseNode(this.editor)],
    };
  }
}

(window as any).TextIgniter = TextIgniter;
