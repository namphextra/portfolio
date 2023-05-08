import React from "react";
// import dynamic from "next/dynamic";
import { Editor } from "@tinymce/tinymce-react";

// const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function EditorBase({
  id,
  data,
  updateContent,
}: {
  id: string;
  data: string;
  updateContent: (data: string) => void;
}) {
  return (
    <Editor
      id={id}
      onEditorChange={updateContent}
      initialValue={data}
      apiKey="rybzwcqaiqblzmmyn3smxmwvfjggujcovrhcz9tn6kboh2xu"
      init={{
        height: 500,
        menubar: false,
        plugins: [
          "advlist autolink lists link image charmap print preview anchor",
          "searchreplace visualblocks code fullscreen",
          "insertdatetime media table paste code help wordcount",
        ],
        toolbar:
          "undo redo | formatselect | " +
          "bold italic backcolor | alignleft aligncenter " +
          "alignright alignjustify | bullist numlist outdent indent | " +
          "removeformat | help",
      }}
    />
  );
}
