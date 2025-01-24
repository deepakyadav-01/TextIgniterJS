class Piece {
  text: string;
  attributes: {
    bold: boolean;
    italic: boolean;
    underline: boolean;
    undo?: boolean;
    redo?: boolean;
    fontFamily?: string;
    fontSize?: string;
    textColor?: string;
    backgroundColor?: string;
  };
  constructor(
    text: string,
    attributes: {
      bold?: boolean;
      italic?: boolean;
      underline?: boolean;
      undo?: boolean;
      redo?: boolean;
      fontFamily?: string;
      fontSize?: string;
      textColor?: string;
        backgroundColor?: string;
    } = {}
  ) {
    this.text = text;
    const fontFamilySelect = document.getElementById(
      "fontFamily"
    ) as HTMLSelectElement;
    const fontSizeSelect = document.getElementById(
      "fontSize"
    ) as HTMLSelectElement;
    const textColorSelect = document.getElementById('textColor') as HTMLInputElement;
        const bgColorSelect = document.getElementById('backgroundColor') as HTMLInputElement;
    let selectedFontFamilyValue = "Arial";
    let selectedFontSizeValue = "16px";
    let selectedTextColor = "#000000";
        let selectedBgColor = "transparent";

    if (fontFamilySelect) {
      selectedFontFamilyValue = fontFamilySelect.value; // Get the selected value
    }

    if (fontSizeSelect) {
      selectedFontSizeValue = fontSizeSelect.value; // Get the selected value
    }
    if (textColorSelect) {
        selectedTextColor = textColorSelect.value;
    }
    if (bgColorSelect) {
        selectedBgColor = bgColorSelect.value;
    }

    this.attributes = {
      bold: attributes.bold || false,
      italic: attributes.italic || false,
      underline: attributes.underline || false,
      undo: attributes.undo || false,
      redo: attributes.redo || false,
      fontFamily: attributes.fontFamily || selectedFontFamilyValue, // Default font family
      fontSize: attributes.fontSize || selectedFontSizeValue, // Default font size
      textColor: attributes.textColor || selectedTextColor,
      backgroundColor: attributes.backgroundColor || selectedBgColor
    };
  }
  isBold(): boolean {
    return this.attributes.bold;
  }
  setBold(v: boolean): void {
    this.attributes.bold = v;
  }
  isItalic(): boolean {
    return this.attributes.italic;
  }
  isUndo(): boolean | undefined {
    return this.attributes.undo;
  }
  isRedo(): boolean | undefined {
    return this.attributes.redo;
  }

  setItalic(v: boolean): void {
    this.attributes.italic = v;
  }
  isUnderline(): boolean {
    return this.attributes.underline;
  }
  setUnderline(v: boolean): void {
    this.attributes.underline = v;
  }
  setUndo(v: boolean): void {
    this.attributes.undo = v;
  }
  setRedo(v: boolean): void {
    this.attributes.redo = v;
  }

  clone(): Piece {
    return new Piece(this.text, { ...this.attributes });
  }
  hasSameAttributes(other: Piece): boolean {
    return (
      this.attributes.bold === other.attributes.bold &&
      this.attributes.italic === other.attributes.italic &&
      this.attributes.underline === other.attributes.underline &&
      this.attributes.undo === other.attributes.undo &&
      this.attributes.redo === other.attributes.redo &&
      this.attributes.fontFamily === other.attributes.fontFamily &&
      this.attributes.fontSize === other.attributes.fontSize&&
      this.attributes.textColor === other.attributes.textColor &&
      this.attributes.backgroundColor === other.attributes.backgroundColor
    );
  }
}

export default Piece;
