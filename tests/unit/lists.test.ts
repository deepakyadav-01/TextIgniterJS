import { TextIgniter } from '../../src';
import { setupTestEditor } from '../setup/domSetup';

describe('List Formatting', () => {
    let editor: TextIgniter;
    let editorElement: HTMLDivElement;
  
    beforeEach(() => {
      const setup = setupTestEditor();
      editor = setup.editor;
      editorElement = setup.editorElement;
    });
  
    test('Bullet List', () => {
      editorElement.innerHTML = 'Item 1<br>Item 2';
      const range = document.createRange();
      range.selectNodeContents(editorElement);
      const selection = window.getSelection()!;
      selection.removeAllRanges();
      selection.addRange(range);
  
      editor.format('bullet_list');
  
      expect(editorElement.querySelector('ul')).not.toBeNull();
    });
  
    test('Numbered List', () => {
      editorElement.innerHTML = 'Item 1<br>Item 2';
      const range = document.createRange();
      range.selectNodeContents(editorElement);
      const selection = window.getSelection()!;
      selection.removeAllRanges();
      selection.addRange(range);
  
      editor.format('numbered_list');
  
      expect(editorElement.querySelector('ol')).not.toBeNull();
    });
  });