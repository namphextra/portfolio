import React from "react";
// import { Editor } from "@tinymce/tinymce-react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function MarkupEditor({
  content,
  updateContent,
}: {
  content: string;
  updateContent: (content: string) => void;
}) {
  return (
    // <Editor
    //   apiKey="rybzwcqaiqblzmmyn3smxmwvfjggujcovrhcz9tn6kboh2xu"
    //   onInit={(_evt, editor) => setEditorRef(editor)}
    //   initialValue={content}
    //   init={{
    //     height: 500,
    //     menubar: false,
    //     plugins: [
    //       "a11ychecker",
    //       "advlist",
    //       "advcode",
    //       "advtable",
    //       "autolink",
    //       "checklist",
    //       "export",
    //       "lists",
    //       "link",
    //       "image",
    //       "charmap",
    //       "preview",
    //       "anchor",
    //       "searchreplace",
    //       "visualblocks",
    //       "powerpaste",
    //       "fullscreen",
    //       "formatpainter",
    //       "insertdatetime",
    //       "media",
    //       "table",
    //       "help",
    //       "wordcount",
    //     ],
    //     toolbar:
    //       "undo redo | casechange blocks | bold italic backcolor | " +
    //       "alignleft aligncenter alignright alignjustify | " +
    //       "bullist numlist checklist outdent indent | removeformat | a11ycheck code table help",
    //   }}
    //   value={content}
    //   onEditorChange={(a) => updateContent(a)}
    // />
    <ReactQuill theme="snow" value={content} onChange={updateContent} />
  );
}
