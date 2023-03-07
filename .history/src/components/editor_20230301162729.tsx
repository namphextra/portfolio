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
  return <ReactQuill theme="bubble" value={content} onChange={updateContent} />;
}
