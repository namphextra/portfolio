import React from "react";
// import Quill from "quill";
import "react-quill/dist/quill.bubble.css";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function Editor({
  content,
  updateContent,
}: {
  content: string;
  updateContent: (content: string) => void;
}) {
  return (
    <ReactQuill
      theme="bubble"
      value={content}
      onChange={updateContent}
      formats={[
        "header",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "list",
        "bullet",
        "indent",
        "link",
        "image",
      ]}
      modules={{
        toolbar: [
          [{ header: [1, 2, false] }],
          ["bold", "italic", "underline", "strike", "blockquote"],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
          ],
          ["link", "image"],
          ["clean"],
        ],
      }}
    />
  );
}
