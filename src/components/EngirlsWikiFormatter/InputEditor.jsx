import React, { useEffect } from 'react';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import BalloonEditor from '@ckeditor/ckeditor5-editor-balloon/src/ballooneditor';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Link from '@ckeditor/ckeditor5-link/src/link';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Autosave from '@ckeditor/ckeditor5-autosave/src/autosave';

import { useStateContext } from './StateContext';
import { getNamesInDialogue } from './utils';

export const InputEditor = () => {
  const { inputRef, renderRef, setRenders } = useStateContext();

  // `renders` can't be referred to directly because of stale closure
  // https://css-tricks.com/dealing-with-stale-props-and-states-in-reacts-functional-components/
  const updateNamesForRenders = (editor) => {
    const names = getNamesInDialogue(editor.getData());
    Object.keys(names).forEach((name) => {
      names[name] = renderRef.current[name] || '';
    });
    setRenders(names);
  };

  const inputEditorConfig = {
    plugins: [
      Autosave,
      Bold,
      Essentials,
      Italic,
      Link,
      Paragraph,
      PasteFromOffice,
    ],
    toolbar: ['bold', 'italic', 'link', '|', 'undo', 'redo'],
    // Autosave documentation:
    // https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/saving-data.html#autosave-feature
    autosave: {
      save: updateNamesForRenders,
    },
  };

  const inputEditorData = `
  <p>Natsumi: So, yeah. Things are getting a little crazy around here.</p>
  <p>Saaya: Hmm... I wonder what happened for it to end up like this?</p>
  <p>Oh, by the way, when I was doing stuff for my extracurricular, I saw you guys running around with the Student Council President.</p>
  <p>It'd be annoying if I got caught up in whatever you were doing, so I didn't call out to you.</p>
  <p>Natsumi: Saaya-chan's always working so hard during practice.</p>
  <p>MS Cooperation Chapter 1.png</p>
  <p>Location: Classroom</p>
  <p>Natsumi: You're working hard until late every day! Thaaat's youth, huh?! I'm cheering you onnn!!</p>
`;

  // TODO: This doesn't seem to be applied if you switch to another formatter
  // then switch back
  useEffect(() => {
    // Grab the HTML element using ref.current.editor
    // https://github.com/ckeditor/ckeditor5/issues/1185
    try {
      inputRef.current.editor?.editing.view.change((writer) => {
        writer.setAttribute(
          'spellcheck',
          'false',
          inputRef.current.editor.editing.view.document.getRoot(),
        );
      });
    } catch (e) {
      console.log(e);
    }

    const cleanup = () => {};
    return cleanup;
  }, [!!inputRef.current?.editor?.editing]);

  return (
    <CKEditor
      editor={BalloonEditor}
      config={inputEditorConfig}
      data={inputEditorData}
      ref={inputRef}
    />
  );
};
