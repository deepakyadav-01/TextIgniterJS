import { TextIgniter } from '../../src';
import { setupTestEditor } from '../setup/domSetup';

describe('Hyperlink Handling', () => {
    let editor: TextIgniter;
    let editorElement: HTMLDivElement;
  
    beforeEach(() => {
      const setup = setupTestEditor(['hyperlink']);
      editor = setup.editor;
      editorElement = setup.editorElement;
    });
  
    test('Hyperlink Modal Opens', () => {
      // This would typically mock the openHyperlinkModal method
      const mockOpen = jest.spyOn(editor['hyperlinkHandler'], 'openHyperlinkModal');
      
      // Simulate button click
      const hyperlinkButton = document.querySelector('button[data-command="hyperlink"]');
      hyperlinkButton?.dispatchEvent(new Event('click'));
  
      expect(mockOpen).toHaveBeenCalled();
    });
  });
  