import React from 'react';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import BalloonEditor from '@ckeditor/ckeditor5-editor-balloon/src/ballooneditor';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Link from '@ckeditor/ckeditor5-link/src/link';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';

import { useStateContext } from '../Main/StateContext';
import { getCharactersFromInput } from '../utils';

export function InputEditor() {
  // get refs from EditorContext to provide to CKEditor components
  // refer to Main.js code
  const { inputRef, setCharacters } = useStateContext();

  // Autosave documentation:
  // https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/saving-data.html#autosave-feature
  const inputEditorConfig = {
    plugins: [Essentials, Paragraph, Bold, Italic, Link, PasteFromOffice],
    toolbar: ['bold', 'italic', 'link', '|', 'undo', 'redo'],
  };

  const inputEditorData = `
  <p>Time: A few days later…</p>
  <p>Location: Outside ES</p>
  <p>Jun: Hmm... At this rate, I should be able to make it to the venue with time to spare.</p>
  <p>えぇっと？　この時間なら現場に余裕で間に合いそうっすね</p>
  <p>Jun: (Right, I'm working with Ibara today. It’s been a while since we had last had a job together as just the two of us, since I usually work either with everyone in Eden or just as Eve.)  </p>
  <p>（たしか今日は茨との仕事だっけ。茨と二人の仕事っていうのも久しぶりっすねぇ。基本『Eden』か『Eve』で仕事をすることがおおいですし）</p>
  
`;

  const handleChange = (_, editor) => {
    const characters = getCharactersFromInput(editor);
    setCharacters(characters);
  };

  return (
    <CKEditor
      editor={BalloonEditor}
      config={inputEditorConfig}
      data={inputEditorData}
      ref={inputRef}
      onChange={handleChange}
    />
  );
}

export function BlockquoteEditor() {
  const { blockquoteRef } = useStateContext();

  const inputEditorConfig = {
    plugins: [Essentials, Paragraph, Bold, Italic, Link, PasteFromOffice],
    toolbar: ['bold', 'italic', 'link', '|', 'undo', 'redo'],
  };

  return (
    <CKEditor
      editor={BalloonEditor}
      config={inputEditorConfig}
      ref={blockquoteRef}
    />
  );
}
