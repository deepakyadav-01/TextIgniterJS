import { TextIgniter } from '../../src/index';

describe('Editor Initialization', () => {
  test('Creates editor with default features', () => {
    const container = document.createElement('div');
    container.id = 'test-editor';
    document.body.appendChild(container);

    const editor = new TextIgniter('test-editor', { 
      features: ['bold', 'italic', 'underline'] 
    });

    const toolbar = container.querySelector('.toolbar');
    expect(toolbar).not.toBeNull();
    expect(toolbar!.querySelectorAll('button').length).toBe(3);
  });

  test('Throws error for invalid editor ID', () => {
    expect(() => {
      new TextIgniter('non-existent-id', { features: [] });
    }).toThrow('Editor element not found or incorrect element type.');
  });
});