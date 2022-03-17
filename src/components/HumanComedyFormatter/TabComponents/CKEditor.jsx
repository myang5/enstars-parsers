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

export function InputEditor() {
  // get refs from EditorContext to provide to CKEditor components
  // refer to Main.js code
  const { inputRef } = useStateContext();

  // Autosave documentation:
  // https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/saving-data.html#autosave-feature
  const inputEditorConfig = {
    plugins: [Essentials, Paragraph, Bold, Italic, Link, PasteFromOffice],
    toolbar: ['bold', 'italic', 'link', '|', 'undo', 'redo'],
  };

  const inputEditorData = `
<p>https://static.wikia.nocookie.net/ensemble-stars/images/4/4a/%28Elegant_Fragrance%29_Arashi_Narukami_CG2.png/revision/latest?cb=20210715163222</p>
<p>Location: Underground Live House</p>
<p>Mika: Eek, why'd ''I'' get scolded!?</p>
<p>Test non-label dialogue</p>
<p>Nazuna: Calm down... Sorry, I was the one who got distracted. It's my mistake. Don't get mad at Kagehi—Mika-chin, Itsuki.</p>
<p>Heading: Time: Winter</p>
<p>Shu: ''"Itsuki"?'' How disrespectful of you to call me by my name. Do you consider yourself my equal?</p>
<p>Shu: Test label dialogue</p>
<p>Nazuna: O-Oh... Sorry, Oshi-san.</p>
`;

  return (
    <CKEditor
      editor={BalloonEditor}
      config={inputEditorConfig}
      data={inputEditorData}
      ref={inputRef}
    />
  );
}
