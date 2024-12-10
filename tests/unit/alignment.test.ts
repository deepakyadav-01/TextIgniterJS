import { TextIgniter } from '../../src';
import { setupTestEditor } from '../setup/domSetup';

describe('Text Alignment', () => {
    let editor: TextIgniter;
    let editorElement: HTMLDivElement;
  
    beforeEach(() => {
      const setup = setupTestEditor();
      editor = setup.editor;
      editorElement = setup.editorElement;
    });
  
    test('Left alignment', () => {
      editorElement.innerHTML = 'Test Text';
      editor.format('left_align');
  
      expect(editorElement.style.textAlign).toBe('left');
    });
  
    test('Center alignment', () => {
      editorElement.innerHTML = 'Test Text';
      editor.format('center_align');
  
      expect(editorElement.style.textAlign).toBe('center');
    });
  
    // Similar tests for right and justify alignment
  });