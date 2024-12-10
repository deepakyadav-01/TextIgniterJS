import { TextIgniter } from '../../src';
import { setupTestEditor } from '../setup/domSetup';

describe('Text Formatting', () => {
  let editor: TextIgniter;
  let editorElement: HTMLDivElement;

  beforeEach(() => {
    const setup = setupTestEditor();
    editor = setup.editor;
    editorElement = setup.editorElement;
  });

  test('Bold formatting', () => {
    // Simulate text selection
    editorElement.innerHTML = 'Test Text';
    const range = document.createRange();
    range.selectNodeContents(editorElement.firstChild!);
    const selection = window.getSelection()!;
    selection.removeAllRanges();
    selection.addRange(range);

    // Apply bold
    editor.format('bold');

    expect(editorElement.innerHTML).toContain('<strong>Test Text</strong>');
  });

  test('Italic formatting', () => {
    editorElement.innerHTML = 'Test Text';
    const range = document.createRange();
    range.selectNodeContents(editorElement.firstChild!);
    const selection = window.getSelection()!;
    selection.removeAllRanges();
    selection.addRange(range);

    editor.format('italic');

    expect(editorElement.innerHTML).toContain('<em>Test Text</em>');
  });

  // Similar tests for other formatting options
});