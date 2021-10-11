import React, { useEffect } from 'react';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import BalloonEditor from '@ckeditor/ckeditor5-editor-balloon/src/ballooneditor';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Link from '@ckeditor/ckeditor5-link/src/link';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';

import { useStateContext } from '../Main/StateContext';

export function InputEditor() {
  // get refs from EditorContext to provide to CKEditor components
  // refer to Main.js code
  const { inputRef } = useStateContext();

  const inputEditorConfig = {
    plugins: [Essentials, Paragraph, Bold, Italic, Link, PasteFromOffice],
    toolbar: ['bold', 'italic', 'link', '|', 'undo', 'redo'],
  };

  const inputEditorData = `
<p>Jun: normal text '''bold text''' text with: colon ''italic text''</p>
<p>'''bold text''' '''more bold text''' ''italic text'' ''more italic text''</p>
`;

  useEffect(() => {
    console.log('JayFormatter editor useEffect');
    // Grab the HTML element using ref.current.editor
    // https://github.com/ckeditor/ckeditor5/issues/1185
    try {
      inputRef.current.editor.editing.view.change((writer) => {
        writer.setAttribute(
          'spellcheck',
          'false',
          inputRef.current.editor.editing.view.document.getRoot(),
        );
      });
    } catch (e) {
      // TODO: figure out why inputRef.current.editor.editing is being read
      // causing a memory leak
    }

    const cleanup = () => {};
    return cleanup;
  }, []);

  return (
    <CKEditor
      editor={BalloonEditor}
      config={inputEditorConfig}
      data={inputEditorData}
      ref={inputRef}
    />
  );
}
