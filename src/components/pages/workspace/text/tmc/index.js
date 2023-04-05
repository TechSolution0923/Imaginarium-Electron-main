import React, { useState, useRef } from "react";

// TinyMCE so the global var exists
// eslint-disable-next-line no-unused-vars
import { Editor } from "@tinymce/tinymce-react";

// eslint-disable-next-line no-unused-vars
import tinymce from "tinymce";
import "tinymce/skins/ui/oxide-dark/skin.css";

import "tinymce/models/dom/model";
import "tinymce/models/dom";

// Theme
import "tinymce/themes/silver";
// Toolbar icons
import "tinymce/icons/default";
// Editor styles
import "tinymce/plugins/advlist";
import "tinymce/plugins/anchor";
import "tinymce/plugins/autolink";
import "tinymce/plugins/autoresize";
import "tinymce/plugins/autosave";
import "tinymce/plugins/charmap";
import "tinymce/plugins/code";
import "tinymce/plugins/codesample";
import "tinymce/plugins/directionality";
import "tinymce/plugins/fullscreen";
import "tinymce/plugins/help";
import "tinymce/plugins/image";
import "tinymce/plugins/importcss";
import "tinymce/plugins/insertdatetime";
import "tinymce/plugins/link";
import "tinymce/plugins/lists";
import "tinymce/plugins/media";
import "tinymce/plugins/nonbreaking";
import "tinymce/plugins/pagebreak";
import "tinymce/plugins/preview";
import "tinymce/plugins/quickbars";
import "tinymce/plugins/save";
import "tinymce/plugins/searchreplace";
import "tinymce/plugins/table";
import "tinymce/plugins/template";
import "tinymce/plugins/visualblocks";
import "tinymce/plugins/visualchars";
import "tinymce/plugins/wordcount";

import getCurrentStyle from "./getCurrentStyles";

const TinyMceEditor = (props) => {
  const { state, setState } = props;
  const [editorState, setEditorState] = useState("<p>Hello World!</p>");
  const editorRef = useRef(null);

  const handleChange = () => {
    setEditorState(editorRef.current.getContent());
    console.log("Editor: ", editorRef.current.getContent());
  };

  return (
    <div className="flex-auto h-[calc(100vh-112px)]">
      <div className="CustomScroll h-full w-full overflow-y-auto flex justify-center p-10">
        <Editor
          apiKey="1fh52zkwtcwiski4p6orfwfxd8vcerxbdw33uug1lc7g6yoi"
          onInit={(evt, editor) => (editorRef.current = editor)}
          init={{
            width: "100%",
            autosave_ask_before_unload: true,
            plugins:
              "lists autoresize advlist anchor autolink autosave charmap code quickbars wordcount visualchars visualblocks",
            autosave_interval: "30s",
            autosave_prefix: "{path}{query}-{id}-",
            autosave_restore_when_empty: false,
            autosave_retention: "2m",
            image_advtab: true,
            toolbar: false,
            menubar: false,
            emoticons_images_url: "http://my.server/images/emoticons/",
            link_list: [
              { title: "My page 1", value: "https://www.tiny.cloud" },
              { title: "My page 2", value: "http://www.moxiecode.com" },
            ],
            image_list: [
              { title: "My page 1", value: "https://www.tiny.cloud" },
              { title: "My page 2", value: "http://www.moxiecode.com" },
            ],
            image_class_list: [
              { title: "None", value: "" },
              { title: "Some class", value: "class-name" },
            ],
            importcss_append: true,
            templates: [
              {
                title: "New Table",
                description: "creates a new table",
                content:
                  '<div class="mceTmpl"><table width="98%%"  border="0" cellspacing="0" cellpadding="0"><tr><th scope="col"> </th><th scope="col"> </th></tr><tr><td> </td><td> </td></tr></table></div>',
              },
              {
                title: "Starting my story",
                description: "A cure for writers block",
                content: "Once upon a time...",
              },
              {
                title: "New list with dates",
                description: "New List with dates",
                content:
                  '<div class="mceTmpl"><span class="cdate">cdate</span><br><span class="mdate">mdate</span><h2>My List</h2><ul><li></li><li></li></ul></div>',
              },
            ],
            template_cdate_format:
              "[Date Created (CDATE): %m/%d/%Y : %H:%M:%S]",
            template_mdate_format:
              "[Date Modified (MDATE): %m/%d/%Y : %H:%M:%S]",
            image_caption: true,
            quickbars_selection_toolbar:
              "bold italic | quicklink h2 h3 blockquote quickimage quicktable",
            noneditable_class: "mceNonEditable",
            spellchecker_ignore_list: ["Ephox", "Moxiecode"],
            content_style:
              "body{ color: white; background: #2b2b2b; font-size: 18px; font-family:Helvetica; }",
            contextmenu: "link image table configurepermanentpen",
            a11y_advanced_options: true,
            skin: "oxide-dark",
            content_css: "dark",
            branding: false,
            init_instance_callback: function (editor) {
              editor.on("click", function (e) {
                getCurrentStyle(state, setState);
              });
            },
            nonbreaking_force_tab: true,
          }}
          value={editorState}
          onEditorChange={() => handleChange()}
          style={{height: 100 + "% !important"}}
        />
      </div>
    </div>
  );
};

export default TinyMceEditor;
