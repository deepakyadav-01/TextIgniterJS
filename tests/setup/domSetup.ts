import { TextIgniter } from '../../src/index';

// Helper function to set up a mock DOM environment
export function setupTestEditor(features: string[] = []): { 
  editor: TextIgniter, 
  editorElement: HTMLDivElement 
} {
  // Create a container div
  const container = document.createElement('div');
  document.body.appendChild(container);

  // Create an editor div
  const editorDiv = document.createElement('div');
  editorDiv.id = 'test-editor';
  container.appendChild(editorDiv);

  // Initialize TextIgniter
  const editor = new TextIgniter('test-editor', { 
    features: features.length ? features : [
      'bold', 'italic', 'underline', 
      'subscript', 'superscript', 
      'left_align', 'center_align', 'right_align', 'justify',
      'bullet_list', 'numbered_list',
      'heading', 'hyperlink', 'image'
    ] 
  });

  return { editor, editorElement: editorDiv };
}