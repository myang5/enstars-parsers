import React, { useEffect } from 'react';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import BalloonEditor from '@ckeditor/ckeditor5-editor-balloon/src/ballooneditor';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Link from '@ckeditor/ckeditor5-link/src/link';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import GeneralHtmlSupport from '@ckeditor/ckeditor5-html-support/src/generalhtmlsupport';

import { useStateContext } from '../Main/StateContext';

const customElements = ['hold', 'ho', 'thought', 'th', 'spell', 'sp'];

/**
 * A plugin extending General HTML Support for example custom HTML elements.
 * Based on documentation example:
 * https://ckeditor.com/docs/ckeditor5/latest/features/general-html-support.html#enabling-custom-elements
 */
class ExtendHTMLSupport extends Plugin {
  static get requires() {
    return [GeneralHtmlSupport];
  }

  init() {
    // Extend schema with custom HTML elements.
    const dataFilter = this.editor.plugins.get('DataFilter');
    const dataSchema = this.editor.plugins.get('DataSchema');

    customElements.forEach((elementName) => {
      dataSchema.registerInlineElement({
        view: elementName,
        model: elementName,
        isObject: true,
        modelSchema: {
          inheritAllFrom: '$htmlObjectInline',
        },
      });

      // Custom elements need to be registered using direct API instead of config.
      dataFilter.allowElement(elementName);
    });
  }
}

export function InputEditor() {
  // get refs from EditorContext to provide to CKEditor components
  // refer to Main.js code
  const { inputRef } = useStateContext();

  // Autosave documentation:
  // https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/saving-data.html#autosave-feature
  const inputEditorConfig = {
    plugins: [
      Essentials,
      Paragraph,
      Bold,
      Italic,
      Link,
      PasteFromOffice,
      ExtendHTMLSupport,
    ],
    toolbar: ['bold', 'italic', 'link', '|', 'undo', 'redo'],
    htmlSupport: {
      allow: customElements.map((elementName) => ({
        name: elementName,
      })),
    },
  };

  const inputEditorData = `
<p>Location: Pool</p>
<p>CW: Death threats</p>
<p>Narration: Time: Several minutes later</p>
<p>Narration: Several minutes later</p>
<p>Image: /img/es/eventstory/meteorimpact/firsthalfch2.jpg</p>
<p>Natsume: HoweVER. Wi<i>th</i>in a ga<i>me</i> where <i>every</i>thing is <i>proGRAMMED</i></p>
<p>In this world where everything obeys my every <hold>garDEN—</hold></p>
<p>Image: /img/es/eventstory/meteorimpact/firsthalfch2.jpg</p>
<p><th>And I will give everyone an equal opportunity to experience their own happily ever afTER.</th></p>
<p><spell>—Welcome to paradise, my <hold>idols♪</hold></spell></p>
<p>Tsumugi: Um, but, no matter how you look at it, I'm pretty sure this world is a dystopia, right?</p>
`;

  useEffect(() => {
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
