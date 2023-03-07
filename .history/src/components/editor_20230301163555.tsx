import React from "react";
// import Quill from "quill";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function Editor({
  content,
  updateContent,
}: {
  content: string;
  updateContent: (content: string) => void;
}) {
  return <ReactQuill theme="snow" value={content} onChange={updateContent} modules={toolbar: [[{ 'header': [1, 2, false] }],
  ['bold', 'italic', 'underline','strike', 'blockquote'],
  [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
  ['link', 'image'],
  ['clean']]} />;
}
