import React from "react";
// import { Editor } from "@tinymce/tinymce-react";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
import Quill from "quill";
import "quill/dist/quill.snow.css";

export default function Editor({
  content,
  updateContent,
}: {
  content: string;
  updateContent: (content: string) => void;
}) {
  const editor = new Quill("#editor", {
    theme: "snow",
  });
  return <div className="editor" id="editor"></div>;
}
