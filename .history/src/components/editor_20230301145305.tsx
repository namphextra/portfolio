import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

export default function MarkupEditor({
  content,
  updateContent,
}: {
  content: string;
  updateContent: (content: string) => void;
}) {
  const editorRef = useRef(null);
  const setEditorRef = (ref: any) => {
    if (editorRef) {
      editorRef.current = ref;
    }
  };

  return (
    <Editor
      apiKey="rybzwcqaiqblzmmyn3smxmwvfjggujcovrhcz9tn6kboh2xu"
      onInit={(_evt, editor) => setEditorRef(editor)}
      initialValue={content}
      init={{
        height: 500,
        menubar: false,
        plugins: [
          "a11ychecker",
          "advlist",
          "advcode",
          "advtable",
          "autolink",
          "checklist",
          "export",
          "lists",
          "link",
          "image",
          "charmap",
          "preview",
          "anchor",
          "searchreplace",
          "visualblocks",
          "powerpaste",
          "fullscreen",
          "formatpainter",
          "insertdatetime",
          "media",
          "table",
          "help",
          "wordcount",
        ],
        toolbar:
          "undo redo | casechange blocks | bold italic backcolor | " +
          "alignleft aligncenter alignright alignjustify | " +
          "bullist numlist checklist outdent indent | removeformat | a11ycheck code table help",
        content_style:
          "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
      }}
      value={content}
      onEditorChange={(a) => updateContent(a)}
    />
  );
}
